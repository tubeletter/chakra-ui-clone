import styled from 'styled-components';
import Textarea, { TextareaProps, colorSchemeType } from './Textarea';

export default {
  title: 'chakra-ui-styled/components/form/textarea',
  component: Textarea,
  parameters: { controls: { expanded: true } },

  argTypes: {
    colorScheme: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } }
  },
  args: {
    colorScheme: 'blue',
    disabled: false,
    isInvalid: false
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Stack = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 0;
  gap: 10px;
`;
export const TextareaIndex = (args: TextareaProps) => {
  const colorArr: colorSchemeType[] = ['whiteAlpha', 'blackAlpha', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Textarea</h1>

      <h2>Textarea Demo</h2>
      <div>
        <Textarea {...args} />
      </div>

      <h2>Textarea Index</h2>
      {colorArr.map((color) => (
        <Stack>
          <Textarea placeholder="Hello" colorScheme={color} isInvalid={false} />
          <Textarea placeholder="Hello" colorScheme={color} isInvalid={true} />
          <Textarea placeholder="Hello" colorScheme={color} disabled={true} isInvalid={false} />
        </Stack>
      ))}
    </Wrapper>
  );
};
TextareaIndex.storyName = 'Textarea';
