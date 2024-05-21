import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {useQuery} from '@apollo/client';
import {GetAnimesPerPageDocument} from '@/__gql__/graphql';
export const useAnimeList = (
  props: IAnimeList.IModelProps
): IAnimeList.IModel => {
  const {data, loading, error} = useQuery(GetAnimesPerPageDocument, {
    variables: {page: 1, perPage: 32},
  });

  return {
    data: data?.Page,
    loading,
    error,
  };
};
