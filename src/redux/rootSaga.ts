/* eslint-disable import/no-duplicates */
import { all, fork } from 'redux-saga/effects';
import getRickAndMortyCharacters from 'src/app/pages/Home/homeSagas';
// sagas here

export default function* rootSaga() {
  yield all([
    fork(getRickAndMortyCharacters),
  ]);
}
