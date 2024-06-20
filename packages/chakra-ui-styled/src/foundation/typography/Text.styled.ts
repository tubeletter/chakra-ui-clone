import styled, { css } from 'styled-components';
import { TextProps } from './Text';

export const StyleText = styled.p<TextProps>`
  ${({ theme, size, weight, lineHeight }) => css`
    ${theme.typo.fontFamily};
    font-size: ${theme.typo.text[size].fontSize};
    font-weight: ${weight ? theme.typo.fontWeight[weight] : theme.typo.text[size].fontWeight};
    line-height: ${lineHeight ? theme.typo.lineHeight[lineHeight] : theme.typo.text[size].lineHeight};
  `};
`;
