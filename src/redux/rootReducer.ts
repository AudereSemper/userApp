import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import themeSliceReducer from 'src/assets/themeReducer';
import addNewSliceReducer from 'src/app/pages/AddNewUser/addNewReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  themeSliceReducer,
  addNewSliceReducer,
});

export default createRootReducer;
