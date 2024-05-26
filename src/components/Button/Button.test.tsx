import {Button} from './';
import {render} from '@testing-library/react';

describe('Render Button', () => {
  it('Should be Button.Default exist', () => {
    const {getByTestId} = render(<Button.Default label={'Default'} />);
    const currentElement = getByTestId(`Button:Dafault`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.textContent).toBe('Default');
  });
  it('Should be Button.DefaultFull exist', () => {
    const {getByTestId} = render(<Button.DefaultFull label={'Outline'} />);
    const currentElement = getByTestId(`Button:DefaultFull`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.textContent).toBe('Outline');
  });
  it('Should be Button.Outline exist', () => {
    const {getByTestId} = render(<Button.Outline label={'Outline'} />);
    const currentElement = getByTestId(`Button:Outline`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.textContent).toBe('Outline');
  });
});
