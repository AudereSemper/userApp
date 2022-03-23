/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddNewState, EditActionType, UserType } from './types';

const initialState: IAddNewState = {
  users: [],
  loading: false,
  editAction: {
    isEdit: false,
    userToEdit: null,
  },
  userToAdd: {},
  failsCounter: 0,
  retryAction: false,
};

export const addNewSlice = createSlice({
  name: 'addNewSlice',
  initialState,
  reducers: {
    tryAddUser: (state, action: PayloadAction<UserType>) => {
      state.userToAdd = action.payload;
    },
    setRetryAction: (state, action: PayloadAction<boolean>) => {
      state.retryAction = action.payload;
    },
    addUser: (state, action: PayloadAction<UserType>) => {
      state.users = [...state.users, action.payload];
    },
    setIsEdit: (state, action: PayloadAction<EditActionType>) => {
      state.editAction = action.payload;
    },
    editUser: (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    },
    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserAddFailsCounter: (state, action: PayloadAction<number>) => {
      state.failsCounter = action.payload;
    },
  },
});

export const {
  addUser,
  setIsLoadingStatus,
  setIsEdit,
  tryAddUser,
  editUser,
  setUserAddFailsCounter,
  setRetryAction,
} = addNewSlice.actions;

export default addNewSlice.reducer;
