import styled from 'styled-components';
import Textarea, { TextareaProps } from './Textarea';

export default {
  title: 'chakra-ui-styled/components/form/textarea',
  component: Textarea,
  parameters: { controls: { expanded: true } },

  argTypes: {
    isDisabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } },
  },
  args: {
    isDisabled: false,
    isInvalid: false,
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextareaIndex = (args: TextareaProps) => {
  return (
    <Wrapper>
      <h1>Textarea</h1>

      <h2>Textarea Demo</h2>
      <div>
        <Textarea {...args} />
      </div>

      <h2>Textarea Index</h2>
      <Textarea placeholder="Hello" isDisabled={false} isInvalid={false} />
      <Textarea placeholder="Hello" isDisabled={false} isInvalid={true} />
      <Textarea placeholder="Hello" isDisabled={true} isInvalid={false} />
    </Wrapper>
  );
};
TextareaIndex.storyName = 'Textarea';
