import * as S from './Text.styled';

export interface TextProps {
  children?: React.ReactNode;
  size: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
  lineHeight?: '150' | '130' | '120' | '100';
}

export const BaseText = ({ size, weight, lineHeight, children }: TextProps) => {
  return (
    <>
      <S.StyleText size={size} weight={weight} lineHeight={lineHeight}>
        {children}
      </S.StyleText>
    </>
  );
};
