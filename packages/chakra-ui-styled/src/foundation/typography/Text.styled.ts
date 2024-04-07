import styled from 'styled-components';
import { text } from './typography';
import { StylingProps, TextProps } from './typography.types';

export const TextComponent = styled.p<TextProps>`
  ${({ value, size }) =>
    value &&
    `
  font-weight: ${text.sbComponent!.fontWeight};
  font-family: ${text.fontFamily};
font-size:
  `};
`;

//  storyBookComponent: {
//     fontWeight: '400',
//     '6xl': {
//       fontSize: '60px',
//       lineHeight: '90px'
//     },
