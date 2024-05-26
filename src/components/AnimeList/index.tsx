import {IAnimeList} from '@/components/AnimeList/AnimeList.types';
import {AnimeCard} from '@/components/AnimeCard';
import {Text} from '@/components/Text';
import {Button} from '@/components/Button';
import {useAnimeList} from './AnimeList.model';
import S from './AnimeList.styles';
export const AnimeList = (props: IAnimeList.IView) => {
  const {page, media, loading, showMore} = useAnimeList(props);

  const isInitialLoading = loading && media?.length === 0;

  if (isInitialLoading)
    return (
      <S.Container data-testid={`AnimeList`}>
        {Array.from(Array(32).keys()).map(i => (
          <S.ShimmerCard key={i} data-testid={`AnimeList:ShimmerCard`} />
        ))}
      </S.Container>
    );

  const showMoreButton =
    media?.length > 0 &&
    page?.pageInfo?.hasNextPage &&
    page?.pageInfo?.currentPage;

  if (media?.length === 0 && !loading) {
    return (
      <Text data-testid={`AnimeList:NoData`}>Nenhum anime encontrado</Text>
    );
  }

  return (
    <>
      <S.Container data-testid={`AnimeList`}>
        {media?.map((item, index) => (
          <AnimeCard key={`${item?.id}:${index}`} data={item} />
        ))}
      </S.Container>
      {showMoreButton && (
        <S.ContainerBtn>
          <Button.DefaultFull
            loading={loading}
            onClick={() =>
              page.pageInfo?.currentPage &&
              showMore(page?.pageInfo?.currentPage + 1)
            }
            label={'Ver mais'}
            className="h-[38px]"
          />
        </S.ContainerBtn>
      )}
    </>
  );
};
