/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  isFetching: boolean;
  data: [];
  page: string;
  locationId: string | null;
  location: [];
  episodeId: string,
  episode: any,
}

const initialState: HomeState = {
  loading: false,
  isFetching: true,
  page: '',
  data: [],
  locationId: '',
  location: [],
  episodeId: '',
  episode: [],
};

export const homeSlice = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    startFetchingRickAndMortyCharacter: (state) => state,
    startFetchingRickAndMortyCharacterWithPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setRickAndMortyCharacterData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    startFetchingRickAndMortyLocation: (state, action: PayloadAction<string>) => {
      state.locationId = action.payload;
    },
    setRickAndMortyCharacterLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
    startFetchingRickAndMortyEpisode: (state, action: PayloadAction<string>) => {
      state.episodeId = action.payload;
    },
    setRickAndMortyCharacterEpisode: (state, action: PayloadAction<any>) => {
      state.episode.push(action.payload);
    },
    resetEpisodeReducer: (state) => {
      state.episode = [];
    },
  },
});

export const {
  setRickAndMortyCharacterData,
  startFetchingRickAndMortyCharacter,
  startFetchingRickAndMortyCharacterWithPage,
  setIsLoadingStatus,
  resetEpisodeReducer,
  startFetchingRickAndMortyLocation,
  setRickAndMortyCharacterLocation,
  startFetchingRickAndMortyEpisode,
  setRickAndMortyCharacterEpisode,
} = homeSlice.actions;

export default homeSlice.reducer;
