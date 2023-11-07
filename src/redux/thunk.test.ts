import { ApiRepository } from '../services/api-repository';
import { appStore } from '../store/store';
import { createThunk } from './thunk';

describe('Givem the createThunk', () => {
  describe('When we use it', () => {
    test('Then the ApiRepository should be called', () => {
      const mockRepo = {
        create: jest.fn(),
      } as unknown as ApiRepository;
      const mockCoin = '1';
      const mockFitting = 'loose';
      const mockHand = 'string';
      appStore.dispatch(
        createThunk({
          repo: mockRepo,
          coin: mockCoin,
          fitting: mockFitting,
          hand: mockHand,
        })
      );
    });
  });
});
