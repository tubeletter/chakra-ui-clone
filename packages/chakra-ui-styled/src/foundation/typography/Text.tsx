import { TextProps } from './typography.types';
import * as S from './Text.styled';

export const TextComponent = ({ value, size }: TextProps) => {
  const text = 'In love with Chakra';

  if (size === 'regular') {
    return (
      <>
        <p>{value}</p>
        <S.TextComponent size={size} value={value}>
          {text}
        </S.TextComponent>
      </>
    );
  }
  if (size === 'medium') {
    return (
      <>
        <p>{value}</p>
        <S.TextComponent size={size} value={value}>
          {text}
        </S.TextComponent>
      </>
    );
  }
  if (size === 'semibold') {
    return (
      <>
        <p>{value}</p>
        <S.TextComponent size={size} value={value}>
          {text}
        </S.TextComponent>
      </>
    );
  }
  if (size === 'bold') {
    return (
      <>
        <p>{value}</p>
        <S.TextComponent size={size} value={value}>
          {text}
        </S.TextComponent>
      </>
    );
  }
  if (size === 'extraBold') {
    return (
      <>
        <p>{value}</p>
        <S.TextComponent size={size} value={value}>
          {text}
        </S.TextComponent>
      </>
    );
  }
  return (
    <>
      <p>{value}</p>
      <S.TextComponent size={size} value={value}>
        {text}
      </S.TextComponent>
    </>
  );
};
