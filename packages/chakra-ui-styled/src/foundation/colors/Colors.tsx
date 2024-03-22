import styled from 'styled-components';
import { ColorElementProps } from './color.types';

const Container = styled.div`
  display: flex;
`;
const ColorElement = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 48px;
  font-size: 14px;
  line-height: 21px;
  h2 {
    font-weight: 600;
  }
  h3 {
    font-weight: 400;
  }
`;
type colorProps = {
  value: string;
  title: string;
};
const Colors = ({ value, title }: colorProps) => {
  return (
    <Container>
      <ColorElement />
      <Title>
        {value},{title}
      </Title>
    </Container>
  );
};

export default Colors;
