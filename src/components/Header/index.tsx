import S from './Header.styles';
import Image from 'next/image';
import headerImg from '../../../public/header_img.png';
export const Header = () => (
  <S.Container data-testid={`Header`}>
    <S.ImageContainer>
      <Image
        src={headerImg}
        alt={`image header with buscanime text`}
        width="237"
        height="28"
        className="h-[28px] w-[237px] rounded-t-lg"
      />
    </S.ImageContainer>
  </S.Container>
);
