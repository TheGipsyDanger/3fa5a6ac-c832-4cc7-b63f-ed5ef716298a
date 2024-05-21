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
          <Text
            data-testid="AnimeCard-title"
            variants="large"
            className="text-white font-bold"
          >
            {data?.title?.english || data?.title?.native}
          </Text>
        </S.Infos>
        <S.Average averageScore={Number(data?.averageScore)}>
          <Text
            data-testid="AnimeCard-averageScore"
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
