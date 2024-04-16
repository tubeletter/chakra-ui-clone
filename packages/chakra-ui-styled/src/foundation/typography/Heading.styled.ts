import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading';

export const StyleHeading = styled.h1<HeadingProps>`
  ${({ theme, size, weight }) => css`
    ${theme.typo.fontFamily};
    ${theme.breakpoint.base} {
      font-size: ${theme.typo.small[size].fontSize};
      font-weight: ${weight ? theme.typo.fontWeight[weight] : theme.typo.small[size].fontWeight};
      line-height: ${theme.typo.small[size].lineHeight};
    }
    ${theme.breakpoint.lg} {
      font-size: ${theme.typo.large[size].fontSize};
      font-weight: ${weight ? theme.typo.fontWeight[weight] : theme.typo.large[size].fontWeight};
      line-height: ${theme.typo.large[size].lineHeight};
    }
  `};
`;
