import {GlobalWrapper} from './';
import {render} from '@testing-library/react';

describe('Render GlobalWrapper', () => {
  it('Should be GlobalWrapper.Container exist', () => {
    const {getByTestId} = render(<GlobalWrapper.Container />);
    const currentElement = getByTestId(`GlobalWrapperContainer`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be GlobalWrapper.Content exist', () => {
    const {getByTestId} = render(<GlobalWrapper.Content />);
    const currentElement = getByTestId(`GlobalWrapperContent`);
    expect(currentElement).toBeTruthy();
  });
});
