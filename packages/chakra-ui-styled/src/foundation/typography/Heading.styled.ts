import styled from 'styled-components';
import { large, small } from './typography';
import { HeadingProps, StylingProps } from './typography.types';

export const Heading = styled.h1<HeadingProps>`
  ${({ size, value }) =>
    size === 'large'
      ? `
  font-weight:${large.fontWeight};
  font-family:${large.fontFamily};
  line-height:${(large[value] as StylingProps).lineHeight}
  font-size:${(large[value] as StylingProps).fontSize}
  `
      : `
      font-Weight:${small.fontWeight};
      font-family:${small.fontFamily};
      line-height:${(small[value] as StylingProps).lineHeight}
      font-size:${(small[value] as StylingProps).fontSize}
      `}
`;
