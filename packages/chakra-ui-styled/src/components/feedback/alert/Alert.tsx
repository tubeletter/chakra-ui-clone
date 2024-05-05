import styled, { css } from 'styled-components';
import Icon from './Icon';
import { alertType } from './Alert.stories';

const demoTitle: alertType['title'] = 'Title';
const demoText: alertType['text'] = 'This is a description.';

const Alert = ({ variant, color, title = demoTitle, text = demoText }: alertType) => {
  return (
    <Container variant={variant}>
      <Icon variant={variant} color={color} />
      <TextBox>
        <h5>{title}</h5>
        <p>{text}</p>
      </TextBox>
    </Container>
  );
};

const Container = styled.article<alertType>`
  display: flex;
  align-items: center;
  width: 400px;
  height: 72px;
  ${({ variant }) => css``}
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Alert;
