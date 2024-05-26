import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {AnimeCard} from '@/components/AnimeCard';
import {Button} from '@/components/Button';
import {useAnimeList} from './AnimeList.model';
import S from './AnimeList.styles';
export const AnimeList = (props: IAnimeList.IView) => {
  const {data, loading, showMore} = useAnimeList(props);

  const isInitialLoading = loading && data?.media?.length === 0;
  const showMoreButton =
    data?.media &&
    data?.media?.length > 0 &&
    data?.pageInfo?.hasNextPage &&
    data?.pageInfo?.currentPage;

  if (isInitialLoading)
    return (
      <S.Container data-testid={`AnimeList`}>
        {Array.from(Array(32).keys()).map(i => (
          <S.ShimmerCard key={i} />
        ))}
      </S.Container>
    );

  return (
    <>
      <S.Container data-testid={`AnimeList`}>
        {data?.media?.map((item, index) => (
          <AnimeCard key={`${item?.id}:${index}`} data={item} />
        ))}
      </S.Container>
      {showMoreButton && (
        <S.ContainerBtn>
          <Button.DefaultFull
            loading={loading}
            onClick={() =>
              data.pageInfo?.currentPage &&
              showMore(data?.pageInfo?.currentPage + 1)
            }
            label={'Ver mais'}
            className="h-[38px]"
          />
        </S.ContainerBtn>
      )}
    </>
  );
};
