/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddNewState } from './types';

const initialState: IAddNewState = {
  users: [],
  loading: false,
};

export const addNewSlice = createSlice({
  name: 'addNewSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.users = [...state.users, action.payload];
    },
    setUserData: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setUserData,
  addUser,
  setIsLoadingStatus,
} = addNewSlice.actions;

export default addNewSlice.reducer;
