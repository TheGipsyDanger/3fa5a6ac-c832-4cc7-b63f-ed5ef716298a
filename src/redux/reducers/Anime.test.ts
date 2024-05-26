import reducer, {AnimesPageRequest, IAnimeState} from './Anime';
import {Media} from './../../__gql__/graphql';
import {IResponseAnimeList} from '@/redux/actions/AnimeActions';

describe('Anime slice', () => {
  const initialState: IAnimeState = {
    data: {
      Page: {
        media: [] as Media[],
      },
    } as IResponseAnimeList['data'],
    isLoading: false,
    error: '',
  };

  it('should handle AnimesPageRequest', () => {
    const nextState = reducer(initialState, AnimesPageRequest());

    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBe('');
  });

  it('should handle AnimesPageRequestSuccess', () => {
    const payload: IResponseAnimeList['data'] = {
      Page: {
        media: [{id: 1, title: {english: 'Naruto'}}] as Media[],
      },
    };

    const nextState = reducer(initialState, {
      type: 'Anime/AnimesPageRequestSuccess',
      payload,
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.data.Page.media).toEqual(payload.Page.media);
  });

  it('should handle AnimesPageRequestFailure', () => {
    const payload = 'Error fetching anime list';

    const nextState = reducer(initialState, {
      type: 'Anime/AnimesPageRequestFailure',
      payload,
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(payload);
  });
});
