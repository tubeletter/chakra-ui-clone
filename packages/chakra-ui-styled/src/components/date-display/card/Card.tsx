import styled, { css } from 'styled-components';
import { CardType } from './Card.stories';

const Card = ({ children, variant }: CardType) => {
  return (
    <>
      <Container variant={variant}>{children}</Container>
    </>
  );
};

const Container = styled.article<CardType>`
  min-width: 350px;
  padding: 20px;
  border-radius: 8px;
  ${({ variant }) => {
    return variant === 'elevated'
      ? css`
          background-color: white;
          box-shadow:
            0 1px 3px #0001,
            0 1px 2px #00000006;
        `
      : variant === 'filled'
        ? css`
            background-color: #e2e8f0;
          `
        : css`
            border: 1px solid #e2e8f0;
          `;
  }};
`;

export default Card;
