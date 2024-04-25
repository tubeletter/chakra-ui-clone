import styled from 'styled-components';
import Textarea, { TextareaProps } from './Textarea';

export default {
  title: 'chakra-ui-styled/components/form/textarea',
  component: Textarea,
  parameters: { controls: { expanded: true } },

  argTypes: {
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } }
  },
  args: {
    disabled: false,
    readonly: false,
    isInvalid: false
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
      <Textarea placeholder="Hello" isInvalid={false} />
      <Textarea placeholder="Hello" isInvalid={true} />
      <Textarea placeholder="Hello" readOnly={true} isInvalid={false} />
      <Textarea placeholder="Hello" disabled={true} isInvalid={false} />
    </Wrapper>
  );
};
TextareaIndex.storyName = 'Textarea';
