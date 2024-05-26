import {IAnimeCard} from '@/components/AnimeCard/AnimeCard.types';
import S from './AnimeCard.styles';
import Image from 'next/image';
import {Text} from '../Text';
export const AnimeCard = (props: IAnimeCard.IView) => {
  const {data} = props;

  return (
    <S.Container data-testid={`AnimeCard`}>
      <Image
        src={data?.coverImage?.large}
        alt={`image to ${data?.title?.english}`}
        width="317"
        height="270"
        className=" h-[270px] w-[317px] rounded-t-lg"
      />
      <S.Content>
        <S.Infos>
          <S.Title
            data-testid="AnimeCard-title"
            variants="large"
            className="text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
          >
            {data?.title?.english || data?.title?.native}
          </S.Title>
          <S.TagsArea>
            {data?.tags?.slice(0, 3).map(item => (
              <S.Tag key={item?.id}>
                <Text
                  data-testid="AnimeCard-tag-title"
                  variants="small"
                  className="text-tag-text"
                >
                  {item?.name}
                </Text>
              </S.Tag>
            ))}
          </S.TagsArea>
        </S.Infos>
        <S.Average averageScore={Number(data?.averageScore)}>
          <Text
            data-testid="AnimeCard-average"
            variants="large"
            className="text-white"
          >
            {data?.averageScore}%
          </Text>
        </S.Average>
      </S.Content>
    </S.Container>
  );
};
