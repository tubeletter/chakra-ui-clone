import * as S from './Text.styled';

export interface TextProps {
  children?: React.ReactNode;
  size: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
}

export const TextComponent = ({ size, weight, children }: TextProps) => {
  return (
    <>
      <S.StyleText size={size} weight={weight}>
        {children}
      </S.StyleText>
    </>
  );
};
