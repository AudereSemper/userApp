import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import { fetchWrapper } from '../../components/FetchWrapper/index';
import {
  setIsLoadingStatus,
  setUserData,
  startFetchingUser,
} from './homeReducer';

function* getUser() {
  const endPoint = 'character';
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setUserData(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

export default function* root() {
  yield all([
    takeEvery(startFetchingUser.type, getUser),
  ]);
}
