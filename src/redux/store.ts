import {
  configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
// eslint-disable-next-line import/no-unresolved
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const router = routerMiddleware(history);

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
    .concat(sagaMiddleware)
    .concat(router),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
