import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {useAnimeList} from './AnimeList.model';
import {AnimeCard} from '../AnimeCard';
import {Text} from '../Text';
import S from './AnimeList.styles';
export const AnimeList = (props: IAnimeList.IView) => {
  const {data, loading} = useAnimeList(props);

  if (loading)
    return <Text data-testid="loadingAnimeList">Carregando ...</Text>;

  return (
    <S.Container data-testid={`AnimeList`}>
      {data?.media?.map(item => <AnimeCard key={item?.id} data={item} />)}
    </S.Container>
  );
};
