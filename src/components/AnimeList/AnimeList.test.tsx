import {AnimeList} from './';
import {render} from '@testing-library/react';
import {pageMock} from '@/utils/mocks/page';

jest.mock('./AnimeList.model', () => ({
  useAnimeList: () => ({
    data: pageMock,
    error: undefined,
  }),
}));

describe('Render AnimeList', () => {
  it('Should be AnimeList exist', () => {
    const {getByTestId} = render(<AnimeList />);
    const currentElement = getByTestId(`AnimeList`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be AnimeList render a correct animes', () => {
    const {getAllByTestId} = render(<AnimeList />);
    const elements = getAllByTestId(`AnimeCard`);
    expect(elements).toHaveLength(4);
  });
});
