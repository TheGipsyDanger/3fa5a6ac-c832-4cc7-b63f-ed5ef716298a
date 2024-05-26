import {IAnimeList} from './AnimeList.types';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/utils';
import {animeListActions, searchSetQuery} from '@/redux/actions';
import escapeRegExp from 'escape-string-regexp';
import {GetAnimesPerPageQuery} from '@/__gql__/graphql';

const PER_PAGE = 32;

export const useAnimeList = (
  props: IAnimeList.IModelProps
): IAnimeList.IModel => {
  const dispatch = useAppDispatch();

  const {query, type} = useAppSelector(state => state.Search);

  const {data, isLoading, error} = useAppSelector(state => state.Anime);

  useEffect(() => {
    dispatch(animeListActions.request({page: 1, perPage: PER_PAGE}));
  }, []);

  const showMore = (page: number) => {
    dispatch(animeListActions.request({page, perPage: PER_PAGE}));
    dispatch(searchSetQuery({query: ''}));
  };

  console.log({query});

  const match = new RegExp(escapeRegExp(query?.trim().toLowerCase()));

  const filterMedia = data?.Page?.media?.filter(anime => {
    return match.test(String(anime?.title?.english).toLowerCase());
  });

  const dataToUse = query !== '' ? filterMedia : data?.Page?.media;

  const mediaToUse =
    type === ''
      ? dataToUse
      : dataToUse?.filter(anime => anime?.format === type);

  return {
    page: data?.Page,
    media: mediaToUse as NonNullable<
      NonNullable<GetAnimesPerPageQuery['Page']>['media']
    >,
    loading: isLoading,
    error,
    showMore,
  };
};
