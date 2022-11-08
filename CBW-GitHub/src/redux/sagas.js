import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import wheelSagas from './wheel/saga';


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    wheelSagas()
  ]);
}
