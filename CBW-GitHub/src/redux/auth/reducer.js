import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    UPDATE_USER_PROFILE,
    LOGOUT_USER
} from '../actions';

const INIT_STATE = {
    user: null,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true };
        case UPDATE_USER_PROFILE:
            return { ...state, user: { ...state.user, ...action.payload } };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGOUT_USER:
            return { ...state, user: null };
        default: return state;
    }
}
