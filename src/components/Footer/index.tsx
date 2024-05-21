import {IFooter} from '@/components/Footer/Footer.types';
import Image from 'next/image';
import S from './Footer.styles';
import footerImg from '../../../public/footer_img.png';

export const Footer = (props: IFooter.IView) => (
  <S.Container data-testid={`Footer`}>
    <S.ImageContainer>
      <Image
        src={footerImg}
        alt={`image header with buscanime text`}
        width="169"
        height="34"
        className=" h-[34px] w-[169px]"
      />
    </S.ImageContainer>
  </S.Container>
);
