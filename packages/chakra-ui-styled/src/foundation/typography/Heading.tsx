import styled, { css } from 'styled-components';

export interface HeadingProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  size: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export const StyleHeading = styled.h1<HeadingProps>`
  ${({ theme, size }) => css`
    ${theme.typo.fontFamily};
    ${theme.breakpoint.base} {
      font-size: ${theme.typo.small[size].fontSize};
      font-weight: ${theme.typo.small[size].fontWeight};
      line-height: ${theme.typo.small[size].lineHeight};
    }
    ${theme.breakpoint.lg} {
      font-size: ${theme.typo.large[size].fontSize};
      font-weight: ${theme.typo.large[size].fontWeight};
      line-height: ${theme.typo.large[size].lineHeight};
    }
  `};
`;

export const Heading = ({ as, size, children }: HeadingProps) => {
  return (
    <>
      <StyleHeading as={as} size={size}>
        {children}
      </StyleHeading>
    </>
  );
};
