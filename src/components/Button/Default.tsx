import {IButton} from '@/components/Button/Button.types';
import S from './Button.styles';
import {Text} from '../Text';
export const Default = ({label, ...rest}: IButton.IView) => (
  <S.DefaultContainer {...rest} data-testid={`Button:Dafault`}>
    <Text
      className="font-semibold text-white"
      data-testid={`button-label-${label}`}
    >
      {label}
    </Text>
  </S.DefaultContainer>
);
