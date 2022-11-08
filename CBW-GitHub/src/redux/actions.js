/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_USER_AGREEMENT = "UPDATE_USER_AGREEMENT";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_NEW_WHEEL_TO_PROFILE = "ADD_NEW_WHEEL_TO_PROFILE";
export const UPDATE_WHEEL_STATUS_IN_PROFILE = "UPDATE_WHEEL_STATUS_IN_PROFILE";


/* MY WHEEL */
export const CREATE_NEW_WHEEL = "CREATE_NEW_WHEEL"
export const GET_WHEEL_DATA_ASYNC = "GET_WHEEL_DATA_ASYNC"
export const UPDATE_WHEEL_MEMBERS_ASYNC = "UPDATE_WHEEL_MEMBERS_ASYNC"
export const UPDATE_WHEEL_DATA_LOADING_STATUS = "UPDATE_WHEEL_DATA_LOADING_STATUS"
export const SAVE_SELECTED_WHEEL = "SAVE_SELECTED_WHEEL"
export const UPDATE_WHEEL_ASYNC = "UPDATE_WHEEL_ASYNC"
export const SPLIT_WHEEL = "SPLIT_WHEEL"


/* MENU */
export const MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
export const MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
export const MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
export const MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  "MENU_CHANGE_HAS_SUB_ITEM_STATUS";

export * from "./menu/actions";
export * from "./settings/actions";
export * from "./auth/actions";
export * from "./wheel/actions";