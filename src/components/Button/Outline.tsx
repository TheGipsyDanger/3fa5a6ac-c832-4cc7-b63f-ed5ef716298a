import {IButton} from './Button.types';
import S from './Button.styles';
import {Text} from '../Text';
export const Outline = ({label, ...rest}: IButton.IView) => (
  <S.OutlineContainer {...rest} data-testid={`Button:Outline`}>
    <Text
      className="font-semibold text-primary"
      data-testid={`button-label-${label}`}
    >
      {label}
    </Text>
  </S.OutlineContainer>
);
