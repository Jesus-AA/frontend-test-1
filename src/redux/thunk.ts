import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPayload } from '../model/payload';
import { ApiRepository } from '../services/api-repository';

export const createThunk = createAsyncThunk<
  ApiPayload,
  { repo: ApiRepository; coin: string; fitting: string; hand: string }
>('app/create', async ({ repo, coin, fitting, hand }) => {
  const data = await repo.create(coin, fitting, hand);
  console.log(data);
  return data;
});
