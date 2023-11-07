import { createAsyncThunk } from '@reduxjs/toolkit';
import { Payload } from '../model/payload';
import { ApiRepository } from '../services/api-repository';

export const createThunk = createAsyncThunk<
  Payload,
  { repo: ApiRepository; coin: string; fitting: string }
>('app/create', async ({ repo, coin, fitting }) => {
  const data = await repo.create(coin, fitting);
  console.log(data);
  return data;
});
