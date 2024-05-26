import {useAppDispatch, useAppSelector} from './../../utils/redux/index';
import {SearchBar} from './';
import {render, fireEvent} from '@testing-library/react';

jest.mock('./../../utils/redux/index', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe('useSearchBar', () => {
  it('should update inputValue correctly on handleInputChange', () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    (useAppSelector as jest.Mock).mockReturnValue({
      Search: {
        query: 'Naruto',
      },
    });

    const {getByTestId} = render(<SearchBar />);
    const currentElement = getByTestId(`SearchBar`);
    expect(currentElement).toBeTruthy();

    const animeNameInput = getByTestId('anime:name');
    expect(animeNameInput).toBeTruthy();
    fireEvent.change(animeNameInput, {target: {value: 'Naruto'}});
    console.log(animeNameInput?.value);
    expect(animeNameInput?.value).toBe('Naruto');
    const btn = getByTestId('Button:Dafault');
    fireEvent.click(btn);
  });
});
