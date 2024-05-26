import {
  animeListActions,
  IRequestAnimeList,
  IResponseAnimeList,
} from './AnimeActions';
import {GetAnimesPerPageQuery} from '@/__gql__/graphql';

describe('animeListActions', () => {
  it('should create the correct request action', () => {
    const requestPayload: IRequestAnimeList = {page: 1, perPage: 10};
    const expectedAction = {
      type: 'Anime/AnimesPageRequest',
      payload: requestPayload,
    };

    expect(animeListActions.request(requestPayload)).toEqual(expectedAction);
  });

  it('should create the correct success action', () => {
    const responsePayload: IResponseAnimeList['data'] = {};
    const expectedAction = {
      type: 'Anime/AnimesPageRequestSuccess',
      payload: responsePayload,
    };

    expect(animeListActions.success(responsePayload)).toEqual(expectedAction);
  });

  it('should create the correct failure action', () => {
    const errorPayload = 'Some error message';
    const expectedAction = {
      type: 'Anime/AnimesPageRequestFailure',
      payload: errorPayload,
    };

    expect(animeListActions.failure(errorPayload)).toEqual(expectedAction);
  });
});
