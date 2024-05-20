import styled, {css} from 'styled-components';
import {IText} from './Text.types';
import {theme} from '@/styles';

const variantsText = {
  small: css`
    font-size: ${theme.fontSizes.small}px;
  `,
  default: css`
    font-size: ${theme.fontSizes.default}px;
  `,
  big: css`
    font-size: ${theme.fontSizes.big}px;
  `,
  large: css`
    font-size: ${theme.fontSizes.large}px;
  `,
};

export default {
  Text: styled.span<IText.ITextStyle>`
    ${({variants}) => variantsText[variants as keyof typeof variantsText]};
  `,
};
