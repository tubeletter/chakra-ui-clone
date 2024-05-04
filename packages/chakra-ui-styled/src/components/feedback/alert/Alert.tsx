import { createContext } from 'react';
import styled from 'styled-components';

const Alert = () => {
  return (
    <Container>
      <TextBox>
        <h5>Title</h5>
        <p>This is a description.</p>
      </TextBox>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Alert;
