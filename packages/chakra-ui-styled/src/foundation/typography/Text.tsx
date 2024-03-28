import styled from 'styled-components';
import { TextProps } from './typography.types';

const TextElement = styled.p``;

export const TextComponent = ({ value }: TextProps) => {
  const text = 'In love with Chakra';
  return (
    <>
      <p>{value}</p>
      <TextElement>{text}</TextElement>
    </>
  );
};
