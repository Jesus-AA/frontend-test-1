import { createSlice } from '@reduxjs/toolkit';
import { Payload } from '../model/payload';
import { createThunk } from './thunk';

export type AppState = {
  app: Payload | undefined;
  fitting: string;
  coin: string;
  status: 'idle' | 'loading' | 'loaded' | 'Error';
  picture: string | undefined;
  response: string | undefined;
};

const initialState: AppState = {
  app: undefined,
  fitting: '',
  coin: '',
  status: 'idle',
  picture: undefined,
  response: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    userFittingSelection: (state, { payload }) => {
      state.fitting = payload;
    },
    userCoinSelection: (state, { payload }) => {
      state.coin = payload;
    },
    userHandPicture: (state, { payload }) => {
      state.picture = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createThunk.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createThunk.fulfilled, (state, { payload }) => {
      state.status = 'loaded';
      state.response = String(payload);
    });
    builder.addCase(createThunk.rejected, (state) => {
      state.status = 'Error';
    });
  },
});

export const { userFittingSelection, userCoinSelection, userHandPicture } =
  appSlice.actions;
export default appSlice.reducer;
