import {IHeader} from '@/components/Header/Header.types';
import S from './Header.styles';
export const Header = (props: IHeader.IView) => (
  <S.Container data-testid={`Header`}>
    <S.ImageContainer />
  </S.Container>
);
