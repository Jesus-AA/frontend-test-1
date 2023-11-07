import appReducer from '../redux/slice';
import { AppState, userFittingSelection } from './slice';

const mockInitialState: AppState = {
  app: undefined,
  fitting: '',
  coin: '',
  status: 'idle',
  picture: undefined,
  response: undefined,
} as AppState;

describe('Given the appSlice', () => {
  describe('When we call for certain actions', () => {
    test('Then it should return the state modified', () => {
      const newState = appReducer(mockInitialState, userFittingSelection('1'));
      expect(newState.fitting).toEqual('1');
    });
  });
});
