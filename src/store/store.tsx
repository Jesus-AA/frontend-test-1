import { configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
  reducer: {
    app: () => {},
  },
});

export type TennisZoneDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
