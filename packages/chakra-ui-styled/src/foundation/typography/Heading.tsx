import { HeadingProps } from './typography.types';
import * as S from './Heading.styled';

export const Heading = ({ as, value, size }: HeadingProps) => {
  const text = 'In love with Chakra 〉';
  return (
    <>
      <p>{value}</p>
      <S.Heading value={value} size={size} as={as}>
        {text}
      </S.Heading>
    </>
  );
};
