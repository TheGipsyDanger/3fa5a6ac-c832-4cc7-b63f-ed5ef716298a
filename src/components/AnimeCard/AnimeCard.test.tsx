import {AnimeCard} from './';
import {render} from '@testing-library/react';
import {mediaMock} from '@/utils/mocks/media';

describe('Render AnimeCard', () => {
  it('Should be AnimeCard exist', () => {
    //@ts-ignore
    const {getByTestId} = render(<AnimeCard data={mediaMock} />);
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
  });
});
