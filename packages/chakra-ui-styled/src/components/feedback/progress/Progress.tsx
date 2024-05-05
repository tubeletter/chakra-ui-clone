import styled from 'styled-components';
import { Containers } from '../../../foundation/containers/container';

const Progress = () => {
  return (
    <>
      <Container>
        <Bar />
      </Container>
    </>
  );
};

// height 4 8 12 16 color blue,orange,pink,purple,red,green,teal
const Container = styled.div`
  width: 320px;
`;
const Bar = styled.div``;
const Track = styled.div``;
export default Progress;
