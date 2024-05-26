import {AnimeList} from './';
import {fireEvent, render} from '@testing-library/react';
import {pageMock, useAppDispatch} from '@/utils';
import {useAnimeList} from './AnimeList.model';

jest.mock('../../utils/redux', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: () => ({
    state: () => ({
      Search: {
        query: '',
        type: '',
      },
      Anime: {data: [], isLoading: false, error: ''},
    }),
  }),
}));

jest.mock('escape-string-regexp', () => jest.fn());
const mockDispatch = jest.fn();

jest.mock('./AnimeList.model', () => ({
  useAnimeList: jest.fn(),
}));

describe('Render AnimeList', () => {
  beforeEach(() => {
    (useAnimeList as jest.Mock).mockClear();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('Should be AnimeList exist', () => {
    (useAnimeList as jest.Mock).mockReturnValue({
      page: pageMock,
      media: pageMock.media,
    });

    const {getByTestId} = render(<AnimeList />);
    const currentElement = getByTestId(`AnimeList`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be AnimeList render a correct animes', () => {
    (useAnimeList as jest.Mock).mockReturnValue({
      page: pageMock,
      media: pageMock.media,
    });
    const {getAllByTestId} = render(<AnimeList />);
    const elements = getAllByTestId(`AnimeCard`);
    expect(elements).toHaveLength(4);
  });

  it('Should be AnimeList render empty message', () => {
    (useAnimeList as jest.Mock).mockReturnValue({
      page: pageMock,
      media: [],
    });
    const {getByTestId} = render(<AnimeList />);
    const elements = getByTestId(`AnimeList:NoData`);
    expect(elements).toBeTruthy();
  });

  it('Should be AnimeList render loading state', () => {
    (useAnimeList as jest.Mock).mockReturnValue({
      page: [],
      media: [],
      loading: true,
    });
    const {getAllByTestId} = render(<AnimeList />);
    const elements = getAllByTestId(`AnimeList:ShimmerCard`);
    expect(elements).toHaveLength(32);
  });

  it('Should be AnimeList click on show more', () => {
    (useAnimeList as jest.Mock).mockReturnValue({
      page: pageMock,
      media: pageMock.media,
      showMore: jest.fn(),
    });
    const {getByTestId} = render(<AnimeList />);
    const element = getByTestId(`Button:DefaultFull`);
    console.log({element});
    expect(element).toBeTruthy();
    fireEvent.click(element);
  });
});
