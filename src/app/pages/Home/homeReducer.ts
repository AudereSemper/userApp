/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  isFetching: boolean;
  users: [];
}

const initialState: HomeState = {
  loading: false,
  isFetching: true,
  users: [],
};

export const homeSlice = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    startFetchingUser: (state) => state,
    setUserData: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const {
  setUserData,
  setIsLoadingStatus,
  startFetchingUser,
} = homeSlice.actions;

export default homeSlice.reducer;
