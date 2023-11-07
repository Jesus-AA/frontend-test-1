import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  userCoinSelection,
  userFittingSelection,
  userHandPicture,
} from '../redux/slice';
import { createThunk } from '../redux/thunk';
import { ApiRepository } from '../services/api-repository';
import { AppDispatch, RootState } from '../store/store';

export function useAppHook() {
  const repo = useMemo(
    () => new ApiRepository('https://test.aitaca.io/Aitaca/1.0.0'),
    []
  );

  const { coin, fitting, status, picture, response } = useSelector(
    (state: RootState) => state.app
  );

  const appDispatch = useDispatch<AppDispatch>();

  const userApiCall = (coin: string, fitting: string, hand: string) => {
    appDispatch(createThunk({ repo, coin, fitting, hand }));
  };

  const userRingFittingSelection = (fitting: string) => {
    appDispatch(userFittingSelection(fitting));
  };

  const userCoinSizeSelection = (coinSize: string) => {
    appDispatch(userCoinSelection(coinSize));
  };

  const userHandPictureImg = (picture: string) => {
    appDispatch(userHandPicture(picture));
  };

  return {
    userApiCall,
    userHandPictureImg,
    userRingFittingSelection,
    userCoinSizeSelection,
    coin,
    fitting,
    status,
    picture,
    response,
  };
}
