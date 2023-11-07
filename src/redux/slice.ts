import { createSlice } from '@reduxjs/toolkit';
import { Payload } from '../model/payload';

export type AppState = {
  app: Payload | undefined;
  fitting: string;
  coin: string;
  status: 'idle' | 'loading' | 'loaded' | 'error';
};

const initialState: AppState = {
  app: undefined,
  fitting: '',
  coin: '',
  status: 'idle',
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
  },
});

export const { userFittingSelection, userCoinSelection } = appSlice.actions;
export default appSlice.reducer;
