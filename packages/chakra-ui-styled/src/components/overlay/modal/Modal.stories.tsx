import styled from 'styled-components';
import Modal, { ModalProps } from './Modal';


export default {
  title: 'chakra-ui-styled/components/overlay/modal',
  component: Modal,
  parameters: { controls: { expanded: true } },

  argTypes: {
  },
  args: {
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Wrap = styled.div`
  display: inline-flex;
  padding: 50px 80px;
`;

export const ModalIndex = (args: ModalProps) => {
  return (
    <Wrapper>
      <h1>Modal</h1>

      <h2>Modal Demo</h2>
      <Wrap>
        <Modal {...args} />
      </Wrap>

      <h2>Modal Index</h2>
    </Wrapper>
  );
};
ModalIndex.storyName = 'Modal';
