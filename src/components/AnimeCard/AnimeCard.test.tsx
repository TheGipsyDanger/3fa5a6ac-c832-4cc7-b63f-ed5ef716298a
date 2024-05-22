import {AnimeCard} from './';
import {render} from '@testing-library/react';
import {
  mediaMock,
  mediaMockWithEmptyEnglishTitle,
  mediaMockWithPoorScore,
  mediaMockWithRegularScore,
  mediaMockWithSuccessScore,
} from '@/utils/mocks/media';

describe('Render AnimeCard', () => {
  it('Should be AnimeCard exist', () => {
    //@ts-ignore
    const {getByTestId} = render(<AnimeCard data={mediaMock} />);
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be AnimeCard a correct info', () => {
    const {getByTestId, getAllByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMock} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('Cowboy Bebop');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('80%');
    const tagsElements = getAllByTestId('AnimeCard-tag-title');
    expect(tagsElements).toHaveLength(3);
    expect(tagsElements[0].textContent).toBe('Space');
    expect(tagsElements[1].textContent).toBe('Crime');
    expect(tagsElements[2].textContent).toBe('Episodic');
  });

  it('Should be AnimeCard a correct info with media no has english title', () => {
    const {getByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMockWithEmptyEnglishTitle} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('カウボーイビバップ');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('80%');
  });

  it('Should be AnimeCard a correct info with media no has english title', () => {
    const {getByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMockWithEmptyEnglishTitle} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('カウボーイビバップ');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('80%');
  });

  it('Should be AnimeCard a correct info with media has a poor score', () => {
    const {getByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMockWithPoorScore} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('カウボーイビバップ');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('50%');
  });

  it('Should be AnimeCard a correct info with media has a regular score', () => {
    const {getByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMockWithRegularScore} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('カウボーイビバップ');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('75%');
  });

  it('Should be AnimeCard a correct info with media has a success score', () => {
    const {getByTestId} = render(
      //@ts-ignore
      <AnimeCard data={mediaMockWithSuccessScore} />
    );
    const currentElement = getByTestId(`AnimeCard`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`AnimeCard-title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.textContent).toBe('カウボーイビバップ');
    const currentElementAverage = getByTestId(`AnimeCard-average`);
    expect(currentElementAverage).toBeTruthy();
    expect(currentElementAverage.textContent).toBe('90%');
  });
});
