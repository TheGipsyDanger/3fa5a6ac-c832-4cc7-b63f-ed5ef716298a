import { App }from './';
import { render } from '@testing-library/react';

describe('Render App', () => {
  it('Should be App exist', () => {
    const { getByTestId } = render(<App />);
    const currentElement = getByTestId(`App`);
    expect(currentElement).toBeTruthy();
  });
});