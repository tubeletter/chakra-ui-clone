
import styled, { css } from 'styled-components';
import { TextProps } from './Text';

export const StyleText = styled.p<TextProps>`
  ${({ theme, size, weight }) => css`
    ${theme.typo.fontFamily};
    font-size: ${theme.typo.text[size].fontSize};
    font-weight: ${weight ? theme.typo.fontWeight[weight] : theme.typo.text[size].fontWeight};
    line-height: ${theme.typo.text[size].lineHeight};
  `};
`;
