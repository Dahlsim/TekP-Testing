
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth, firestore, increment, decrement, user, wheel, getWheel } from '../../helpers/Firebase';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    UPDATE_USER_AGREEMENT
} from '../actions';

import {
    loginUserSuccess,
    registerUserSuccess,
    updateUserProfile
} from './actions';
import NotificationManager from '../../components/common/react-notifications/NotificationManager';
import { createNewWheel, getWheelDataAsync } from '../wheel/actions';
import { WheelStatusTypes } from '../../types/wheel';

const loginWithEmailPasswordAsync = async (email, password) =>
    await auth.signInWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);


function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload;
    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
        if (!loginUser.message) {
            const userMetaRef = yield call(getUserById, loginUser.user.uid)
            const userMeta = userMetaRef.data()

            /******** Validate if user got active wheel */
            if (!userMeta.wheels) throw new Error('You have 0 active wheels')
            const filteredWheels = userMeta.wheels.filter(x => x.isActive == true)
            if (filteredWheels.length == 0) throw new Error('You have 0 active wheels')
            yield put(getWheelDataAsync(loginUser.user.uid, filteredWheels[0].id))

            yield put(loginUserSuccess(userMeta));

            history.push('/');
        } else {
            throw new Error(loginUser.message)
        }
    } catch (error) {
        console.log(error)
        NotificationManager.error(error.message || 'Login failed')
    }
}

const registerWithEmailPasswordAsync = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);

const saveRegisteredUserMetaData = async (uid, displayName, email, inviter, pwid) => {
    try {
        // Get current count of the users, to calculate next wheel id
        let count = 1;
        const userStatsDoc = await firestore.collection('users').doc('--stats--').get()
        if (userStatsDoc.exists) {
            const data = userStatsDoc.data()
            if (data) {
                count = data.count + 1
            }
        }
        // Create a user in Firebase firestore database
        const newBatch = firestore.batch()
        const userRef = firestore.collection('users').doc(uid);
        const userStats = firestore.collection('users').doc('--stats--')
        const fireIncrement = increment()

        const userMeta = { email, displayName, uid: uid, myWheels: [{ id: pwid, inviter: inviter }] }
        newBatch.set(userRef, userMeta)
        newBatch.set(userStats, { count: fireIncrement }, { merge: true })
        await newBatch.commit()
        return userMeta
    } catch (error) {
        throw error
    }
}

function* updateUserAgreement({ payload }) {
    const { uid, history } = payload
    yield call(updateUser, uid, { agreementAccepted: true })
    yield put(updateUserProfile({ agreementAccepted: true }))
    history.push('/')
}

const getUserById = async (userId) => {
    return user(userId).get()
}

const updateUser = async (uid, payload) => {
    return user(uid).update(payload)
}

/****** Decond inviter code to get inviter id and wheel id*/
const decodeInviterCode = (code = '') => {
    try {
        const wid = code.substring(code.length - 5, code.length).replace(/^0+/, '');
        const inviter = code.substring(0, code.length - 5)
        return { wid, inviter }
    } catch (error) {
        return { wid: '', inviter: '' }
    }
}

function* registerWithEmailPassword({ payload }) {
    const { email, password, name, inviterCode } = payload.user;
    const { history } = payload
    try {
        /*** validate inviter ********/
        const { wid, inviter } = decodeInviterCode(inviterCode)

        const inviterRef = yield call(getUserById, inviter);
        if (!inviterRef.exists) throw new Error("Invalid invite code entered");

        /*** validate pwid ********/
        const wheel = yield call(getWheel, wid);
        if (!wheel.exists) throw new Error("Invalid invite code entered");
        else {
            const wheelData = wheel.data()
            if (wheelData.status == WheelStatusTypes.BLOCKED) throw new Error(`Wheel is blocked`);
            else if (wheelData.status == WheelStatusTypes.COMPLETED) throw new Error(`Wheel already completed`);
        }

        const registerUser = yield call(registerWithEmailPasswordAsync, email, password);
        if (!registerUser.message) {
            /****** Save user stats on firebase *******/
            const userMeta = yield call(saveRegisteredUserMetaData, registerUser.user.uid, name, email, inviter, wid)
            yield put(registerUserSuccess(userMeta));
            history.push('/')
        } else {
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        console.log('register error : ', error)
        NotificationManager.error(error?.message || 'Unexpected error occured', null, 3000, null, null, 'filled')
    }
}



const logoutAsync = async (history) => {
    await auth.signOut().then(authUser => authUser).catch(error => error);
    history.push('/')
}

function* logout({ payload }) {
    const { history } = payload
    try {
        yield call(logoutAsync, history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}



export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchUpdateUserAgreement() {
    yield takeEvery(UPDATE_USER_AGREEMENT, updateUserAgreement);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchUpdateUserAgreement)
    ]);
}