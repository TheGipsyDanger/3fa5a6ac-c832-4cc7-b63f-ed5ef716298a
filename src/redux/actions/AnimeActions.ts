import {GetAnimesPerPageQuery} from '@/__gql__/graphql';
import {createAsyncAction} from 'typesafe-actions';

export interface IRequestAnimeList {
  page: number;
  perPage: number;
}

export interface IResponseAnimeList {
  data: GetAnimesPerPageQuery;
}

export const animeListActions = createAsyncAction(
  'Anime/AnimesPageRequest',
  'Anime/AnimesPageRequestSuccess',
  'Anime/AnimesPageRequestFailure'
)<IRequestAnimeList, IResponseAnimeList['data'], string>();
