import {
    CREATE_NEW_WHEEL,
    UPDATE_WHEEL,
    SAVE_SELECTED_WHEEL,
    UPDATE_WHEEL_DATA_LOADING_STATUS,
    GET_WHEEL_DATA_ASYNC,
    LOGOUT_USER
} from '../actions';

const INIT_STATE = {
    wheels: [],
    selectedWheel: null,
    isLoading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SAVE_SELECTED_WHEEL: {
            return { ...state, selectedWheel: action.payload, isLoading: false };
        }
        case GET_WHEEL_DATA_ASYNC: {
            return { ...state, isLoading: true };
        }
        case UPDATE_WHEEL_DATA_LOADING_STATUS: {
            return { ...state, isLoading: action.payload };
        }
        case LOGOUT_USER: {
            return INIT_STATE
        }
        default:
            return state
    }
}