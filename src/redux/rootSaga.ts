/* eslint-disable import/no-duplicates */
import { all, fork } from 'redux-saga/effects';
import getUser from 'src/app/pages/Home/homeSagas';

export default function* rootSaga() {
  yield all([
    fork(getUser),
  ]);
}
