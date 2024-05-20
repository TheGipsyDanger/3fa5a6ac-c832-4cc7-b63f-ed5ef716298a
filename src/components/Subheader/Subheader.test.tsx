import {Subheader} from './';
import {render, fireEvent} from '@testing-library/react';

describe('Render Subheader', () => {
  it('Should be Subheader exist', () => {
    const {getByTestId} = render(<Subheader />);
    const currentElement = getByTestId(`Subheader`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be Subheader render a correct options', () => {
    const {getAllByTestId} = render(<Subheader />);
    const defaultElements = getAllByTestId(`Button:Dafault`);
    expect(defaultElements).toHaveLength(1);
    expect(defaultElements[0].textContent).toBe('All Formats');
    const outlineElements = getAllByTestId(`Button:Outline`);
    expect(outlineElements).toHaveLength(7);
    expect(outlineElements[0].textContent).toBe('Tv Show');
    expect(outlineElements[1].textContent).toBe('Movie');
    expect(outlineElements[2].textContent).toBe('Tv Short');
    expect(outlineElements[3].textContent).toBe('Special');
    expect(outlineElements[4].textContent).toBe('OVA');
    expect(outlineElements[5].textContent).toBe('ONA');
    expect(outlineElements[6].textContent).toBe('Music');
  });

  it('Should be Subheader test handleClick', () => {
    const {getAllByTestId} = render(<Subheader />);
    const defaultElements = getAllByTestId(`Button:Dafault`);
    expect(defaultElements[0].textContent).toBe('All Formats');
    expect(defaultElements).toHaveLength(1);

    const outlineElements = getAllByTestId(`Button:Outline`);
    expect(outlineElements).toHaveLength(7);
    expect(outlineElements[0].textContent).toBe('Tv Show');
    fireEvent.click(outlineElements[0]);

    const newDefaultElements = getAllByTestId(`Button:Dafault`);
    expect(newDefaultElements[0].textContent).toBe('Tv Show');
    expect(newDefaultElements).toHaveLength(1);

    const newOutlineElements = getAllByTestId(`Button:Outline`);
    expect(newOutlineElements).toHaveLength(7);

    fireEvent.click(newDefaultElements[0]);
  });
});
