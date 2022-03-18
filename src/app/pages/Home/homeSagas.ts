import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import { fetchWrapper } from '../../components/FetchWrapper/index';
import {
  setIsLoadingStatus,
  setRickAndMortyCharacterData,
  startFetchingRickAndMortyCharacter,
  startFetchingRickAndMortyCharacterWithPage,
  startFetchingRickAndMortyLocation,
  setRickAndMortyCharacterLocation,
  startFetchingRickAndMortyEpisode,
  setRickAndMortyCharacterEpisode,
} from './homeReducer';

// eslint-disable-next-line import/prefer-default-export
function* getRickAndMortyCharacters() {
  const endPoint = 'character';
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setRickAndMortyCharacterData(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

function* getRickAndMortyCharactersWithPage(action) {
  const { payload } = action;
  const endPoint = `character/${payload}`;
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setRickAndMortyCharacterData(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

function* getRickAndMortyLocationOrOrigin(action) {
  const { payload } = action;
  const endPoint = `location/${payload}`;
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setRickAndMortyCharacterLocation(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

function* getRickAndMortyEpisode(action) {
  const { payload } = action;
  const endPoint = `episode/${payload}`;
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setRickAndMortyCharacterEpisode(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

export default function* root() {
  yield all([
    takeEvery(startFetchingRickAndMortyEpisode.type, getRickAndMortyEpisode),
    takeEvery(startFetchingRickAndMortyLocation.type, getRickAndMortyLocationOrOrigin),
    takeEvery(startFetchingRickAndMortyCharacterWithPage.type, getRickAndMortyCharactersWithPage),
    takeEvery(startFetchingRickAndMortyCharacter.type, getRickAndMortyCharacters),
  ]);
}
