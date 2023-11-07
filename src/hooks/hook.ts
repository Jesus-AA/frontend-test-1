import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userCoinSelection, userFittingSelection } from '../redux/slice';
import { createThunk } from '../redux/thunk';
import { ApiRepository } from '../services/api-repository';
import { AppDispatch, RootState } from '../store/store';

export function useAppHook() {
  const repo = useMemo(
    () => new ApiRepository('https://test.aitaca.io/Aitaca/1.0.0'),
    []
  );

  const { coin, fitting, status } = useSelector(
    (state: RootState) => state.app
  );

  const appDispatch = useDispatch<AppDispatch>();

  const userApiCall = (coin: string, fitting: string) => {
    appDispatch(createThunk({ repo, coin, fitting }));
  };

  const userRingFittingSelection = (fitting: string) => {
    appDispatch(userFittingSelection(fitting));
  };

  const userCoinSizeSelection = (coinSize: string) => {
    appDispatch(userCoinSelection(coinSize));
  };

  return {
    userApiCall,
    userRingFittingSelection,
    userCoinSizeSelection,
    coin,
    fitting,
    status,
  };
}
