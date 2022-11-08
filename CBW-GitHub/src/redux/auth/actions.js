import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_AGREEMENT
} from '../actions';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history }
})
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
})

export const updateUserProfile = (data) => ({
  type: UPDATE_USER_PROFILE,
  payload: data
})

export const updateUserAgreementAsync = (uid, history) => ({
  type: UPDATE_USER_AGREEMENT,
  payload: { uid, history }
})

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history }
});