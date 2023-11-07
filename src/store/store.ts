import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/slice';

export const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
