import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import themeSliceReducer from 'src/assets/themeReducer';
import homeSliceReducer from 'src/app/pages/Home/homeReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  themeSliceReducer,
  homeSliceReducer,
});

export default createRootReducer;
