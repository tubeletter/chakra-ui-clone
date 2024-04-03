import { TextProps } from './typography.types';
import * as S from './Text.styled';

export const TextComponent = ({ value }: TextProps) => {
  const text = 'In love with Chakra';
  return (
    <>
      <p>{value}</p>
      <S.TextComponent value={value}>{text}</S.TextComponent>
    </>
  );
};
