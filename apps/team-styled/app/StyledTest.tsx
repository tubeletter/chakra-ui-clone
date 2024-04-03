import styled from 'styled-components';

export const StyledTest = styled.div`
  color: wheat;
  background: ${(props) => props.theme.color.red[200]};
`;
