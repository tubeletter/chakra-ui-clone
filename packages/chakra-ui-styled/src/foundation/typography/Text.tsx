import styled, { css } from 'styled-components';

export interface TextProps {
  children?: React.ReactNode;
  size: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
}
const getFontWeight = (weight: string) => css`
  ${({ theme }) => {
    switch (weight) {
      case 'bold':
        return theme.typo.fontWeight.bold;
      case 'semibold':
        return theme.typo.fontWeight.semibold;
      case 'medium':
        return theme.typo.fontWeight.medium;
      case 'normal':
        return theme.typo.fontWeight.normal;
      default:
        theme.typo.fontWeight.normal;
    }
  }}
`;

const StyleText = styled.p<TextProps>`
  ${({ theme, size, weight }) => css`
    ${theme.typo.fontFamily};
    font-size: ${theme.typo.text[size].fontSize};
    font-weight: ${weight ? getFontWeight(weight) : theme.typo.text[size].fontWeight};
    line-height: ${theme.typo.text[size].lineHeight};
  `};
`;

export const TextComponent = ({ size, weight, children }: TextProps) => {
  return (
    <>
      <StyleText size={size} weight={weight}>
        {children}
      </StyleText>
    </>
  );
};
