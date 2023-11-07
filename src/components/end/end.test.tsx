import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { End } from './end';

describe('Given the component End()', () => {
  describe('When it is rendered', () => {
    render(
      <Provider store={appStore}>
        <End />
      </Provider>
    );
    test('Then it should display a string message', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
