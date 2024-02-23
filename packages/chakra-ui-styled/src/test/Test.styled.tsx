import styled from 'styled-components';

export const StyledTest = styled.div<{ bg?: string }>`
  position: relative;
  z-index: 1;
  font-size: 16px;
  color: red;
  background-color: ${({ bg }) => bg};
`;

const Styled = styled.div`
  position: relative;
  background-color: blue;
`;
