import { SearchBar }from './';
import { render } from '@testing-library/react';

describe('Render SearchBar', () => {
  it('Should be SearchBar exist', () => {
    const { getByTestId } = render(<SearchBar />);
    const currentElement = getByTestId(`SearchBar`);
    expect(currentElement).toBeTruthy();
  });
});