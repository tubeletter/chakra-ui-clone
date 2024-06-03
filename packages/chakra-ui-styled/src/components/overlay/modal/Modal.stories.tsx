import styled from 'styled-components';
import Modal, { ModalProps } from './Modal';


export default {
  title: 'chakra-ui-styled/components/overlay/modal',
  component: Modal,
  parameters: { controls: { expanded: true } },

  argTypes: {
    title: { control: { type: 'text' } },
    contents: { control: { type: 'text' } },
    isOpen: { control: { type: 'boolean' } }
  },
  args: {
    title: 'Modal Title',
    contents: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
    isOpen: false
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
    </Wrapper>
  );
};
ModalIndex.storyName = 'Modal';
