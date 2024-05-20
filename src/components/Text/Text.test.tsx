import {Text} from './';
import {render} from '@testing-library/react';

describe('Render Text', () => {
  it('Should be Text exist', () => {
    const {getByTestId} = render(<Text data-testid="Text:test" />);
    const currentElement = getByTestId(`Text:test`);
    expect(currentElement).toBeTruthy();
  });
});
