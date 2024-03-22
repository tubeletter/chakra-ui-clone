import styled from 'styled-components';
import { text } from './typography';
import { StylingProps, TextProps } from './typography.types';

export const Heading = styled.h1<TextProps>`
  ${({ value }) =>
    value &&
    `
  font-weight: ${text.fontWeight};
  font-family: ${text.fontFamily};
  line-height: ${(text[value] as StylingProps).lineHeight};
  font-size: ${(text[value] as StylingProps).fontSize};
  `}
`;
