import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {AnimeCard} from '@/components/AnimeCard';
import {Text} from '@/components/Text';
import {Button} from '@/components/Button';
import {useAnimeList} from './AnimeList.model';
import S from './AnimeList.styles';
export const AnimeList = (props: IAnimeList.IView) => {
  const {data, loading, showMore} = useAnimeList(props);

  if (loading && data?.media?.length === 0)
    return <Text data-testid="loadingAnimeList">Carregando ...</Text>;

  return (
    <>
      <S.Container data-testid={`AnimeList`}>
        {data?.media?.map(item => <AnimeCard key={item?.id} data={item} />)}
      </S.Container>
      {data?.pageInfo?.hasNextPage && data?.pageInfo?.currentPage && (
        <div className="mt-2 flex flex-1 px-6">
          <Button.DefaultFull
            onClick={() =>
              showMore(
                data?.pageInfo?.currentPage
                  ? data?.pageInfo?.currentPage + 1
                  : 1
              )
            }
            label={'Ver mais'}
            className="h-[38px]"
          />
        </div>
      )}
    </>
  );
};
