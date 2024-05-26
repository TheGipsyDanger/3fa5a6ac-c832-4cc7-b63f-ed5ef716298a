import {IButton} from '@/components/Button/Button.types';
import S from './Button.styles';
import {Text} from '../Text';
export const DefaultFull = ({label, ...rest}: IButton.IView) => (
  <S.DefaultContainerFull {...rest} data-testid={`Button:DefaultFull`}>
    <Text
      className="font-semibold text-white"
      data-testid={`button-label-${label}`}
    >
      {label}
    </Text>
  </S.DefaultContainerFull>
);
