
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth, firestore, increment, decrement, user, wheels, wheel, getWheel } from '../../helpers/Firebase';
import { WheelStatusTypes } from '../../types/wheel'

import {
    CREATE_NEW_WHEEL,
    UPDATE_WHEEL,
    GET_WHEEL_DATA_ASYNC,
    UPDATE_WHEEL_MEMBERS_ASYNC
} from '../actions';
import NotificationManager from '../../components/common/react-notifications/NotificationManager';
import { saveSelectedWheel, updateWheelLoadingStatus } from './actions';

const createNewWheelAsync = async (uid, pwid) => {
    try {
        // Get current count of the wheels, to calculate next wheel id
        console.log("creating wheel for ", uid)
        let count = 1;
        const wheelStatsRef = wheels().doc('stats');
        const wheelStats = await wheelStatsRef.get()
        const userRef = await user(uid).get()
        const { email, displayName } = userRef.data()
        if (wheelStats.exists) {
            const data = wheelStats.data()
            if (data) {
                count = data.count + 1
            }
        }

        // Create a wheel in Firebase firestore database
        const newBatch = firestore.batch()
        const wheelRef = wheels().doc();

        const fireIncrement = increment()

        const wheelData = { id: wheelRef.id, email, displayName, uid, pwid, wid: count.toString(), members: {}, status: WheelStatusTypes.ACTIVE }
        newBatch.set(wheelRef, wheelData)
        newBatch.set(wheelStatsRef, { count: fireIncrement }, { merge: true })
        return newBatch.commit()
    } catch (error) {
        throw error
    }
}

function* getWheelDataAsync({ payload }) {
    try {
        const { wid, uid } = payload
        const wheel = yield call(getWheel, wid)
        let data = wheel.data()
        const member = data.members.filter(x => x.uid == uid)
        if (member.length > 0) data = { ...data, userMeta: member[0] }
        yield put(saveSelectedWheel(data))
    } catch (error) {
        console.log("Error ", error)
        yield put(updateWheelLoadingStatus(false))
        NotificationManager.error(error.message || 'Error occured getting wheel data')
    }
}

function* createNewWheel({ payload }) {
    try {
        const { uid, pwid } = payload;
        yield call(createNewWheelAsync, uid, pwid)
    } catch (error) {
        console.log(error)
        NotificationManager.error(error.message || 'Error occured in generating wheel')
    }
}

const updateWheelMemberAsync = async (id, data) => {
    try {
        const wheelRef = wheel(id);
        return wheelRef.update({ members: data })
    } catch (error) {
        throw error
    }
}

function* updateWheelMember({ payload }) {
    try {
        let { selectedWheel, updatedMember } = payload
        let updatedMembers = selectedWheel.members?.map(data => {
            if (data.uid == updatedMember.uid) return updatedMember
            return data
        })
        selectedWheel['members'] = updatedMembers;
        selectedWheel['userMeta'] = updatedMember;

        yield call(updateWheelMemberAsync, selectedWheel.id, updatedMembers)
        yield put(saveSelectedWheel(selectedWheel))
    } catch (error) {
        console.log(error)
        NotificationManager.error(error.message || 'Error in updating wheel')
    }
}

export function* watchGetWheelDataAsync() {
    yield takeEvery(GET_WHEEL_DATA_ASYNC, getWheelDataAsync);
}


export function* watchCreateNewWheel() {
    yield takeEvery(CREATE_NEW_WHEEL, createNewWheel);
}

export function* watchUpateWheelMember() {
    yield takeEvery(UPDATE_WHEEL_MEMBERS_ASYNC, updateWheelMember);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreateNewWheel),
        fork(watchGetWheelDataAsync),
        fork(watchUpateWheelMember),
    ]);
}