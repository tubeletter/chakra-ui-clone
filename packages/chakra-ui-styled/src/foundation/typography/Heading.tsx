import * as S from './Heading.styled';

export interface HeadingProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  size: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
}

export const Heading = ({ as, size, weight, children }: HeadingProps) => {
  return (
    <>
      <S.StyleHeading as={as} size={size} weight={weight}>
        {children}
      </S.StyleHeading>
    </>
  );
};
