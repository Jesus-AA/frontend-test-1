import { useDispatch, useSelector } from 'react-redux';
import { userCoinSelection, userFittingSelection } from '../redux/slice';
import { AppDispatch, RootState } from '../store/store';

export function useAppHook() {
  const { coin, fitting, status } = useSelector(
    (state: RootState) => state.app
  );

  const appDispatch = useDispatch<AppDispatch>();

  const userRingFittingSelection = (fitting: string) => {
    appDispatch(userFittingSelection(fitting));
  };

  const userCoinSizeSelection = (coinSize: string) => {
    appDispatch(userCoinSelection(coinSize));
  };

  return {
    userRingFittingSelection,
    userCoinSizeSelection,
    coin,
    fitting,
    status,
  };
}
