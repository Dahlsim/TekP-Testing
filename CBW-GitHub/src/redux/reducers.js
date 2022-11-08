import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import wheel from './wheel/reducer';


const reducers = combineReducers({
  menu,
  settings,
  authUser,
  wheel
});

export default reducers;