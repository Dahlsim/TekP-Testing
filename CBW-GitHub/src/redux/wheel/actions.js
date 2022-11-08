import {
    CREATE_NEW_WHEEL,
    UPDATE_WHEEL_ASYNC,
    SAVE_SELECTED_WHEEL,
    UPDATE_WHEEL_DATA_LOADING_STATUS,
    GET_WHEEL_DATA_ASYNC,
    UPDATE_WHEEL_MEMBERS_ASYNC
} from '../actions';

export const createNewWheel = (uid, pwid) => ({
    type: CREATE_NEW_WHEEL,
    payload: { uid, pwid }
});

export const getWheelDataAsync = (uid, wid) => ({
    type: GET_WHEEL_DATA_ASYNC,
    payload: { uid, wid }
});

export const saveSelectedWheel = (payload) => ({
    type: SAVE_SELECTED_WHEEL,
    payload
})

export const updateWheelLoadingStatus = (payload) => ({
    type: UPDATE_WHEEL_DATA_LOADING_STATUS,
    payload
})

export const updateWheelMembersAsync = (selectedWheel, updatedMember) => ({
    type: UPDATE_WHEEL_MEMBERS_ASYNC,
    payload: { selectedWheel, updatedMember }
})