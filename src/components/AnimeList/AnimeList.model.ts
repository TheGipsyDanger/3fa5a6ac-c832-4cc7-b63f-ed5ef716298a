import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/utils';
import {animeListActions} from '@/redux/actions';

const PER_PAGE = 32;

export const useAnimeList = (
  props: IAnimeList.IModelProps
): IAnimeList.IModel => {
  const dispatch = useAppDispatch();

  const {data, isLoading, error} = useAppSelector(state => state.Anime);

  useEffect(() => {
    dispatch(animeListActions.request({page: 1, perPage: PER_PAGE}));
  }, []);

  const showMore = (page: number) => {
    dispatch(animeListActions.request({page, perPage: PER_PAGE}));
  };

  return {
    data: data?.Page,
    loading: isLoading,
    error,
    showMore,
  };
};
