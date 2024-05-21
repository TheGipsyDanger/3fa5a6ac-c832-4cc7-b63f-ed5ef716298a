import { Footer }from './';
import { render } from '@testing-library/react';

describe('Render Footer', () => {
  it('Should be Footer exist', () => {
    const { getByTestId } = render(<Footer />);
    const currentElement = getByTestId(`Footer`);
    expect(currentElement).toBeTruthy();
  });
});