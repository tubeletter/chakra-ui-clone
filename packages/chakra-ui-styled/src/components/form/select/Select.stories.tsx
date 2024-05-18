import styled from 'styled-components';
import Select, { SelectProps, colorSchemeType } from './Select';

export default {
  title: 'chakra-ui-styled/components/form/select',
  component: Select,
  parameters: { controls: { expanded: true } },

  argTypes: {
    placeholder: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } }
  },
  args: {
    placeholder: 'Hello',
    size: 'md',
    colorScheme: 'blue',
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
const Stack = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 0;
  gap: 10px;
`;
export const SelectIndex = (args: SelectProps) => {
  const colorArr: colorSchemeType[] = ['whiteAlpha', 'blackAlpha', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Select</h1>

      <h2>Select Demo</h2>
      <div>
        <Select {...args} />
      </div>

      <h2>Select Index</h2>
      {colorArr.map((color) => (
        <Stack>
          <Select placeholder="Hello" size="xs" colorScheme={color} isInvalid={false} />
          <Select placeholder="Hello" size="xs" colorScheme={color} isInvalid={true} />
          <Select placeholder="Hello" size="xs" colorScheme={color} disabled={true} isInvalid={false} />
          <Select placeholder="Hello" size="sm" colorScheme={color} isInvalid={false} />
          <Select placeholder="Hello" size="sm" colorScheme={color} isInvalid={true} />
          <Select placeholder="Hello" size="sm" colorScheme={color} disabled={true} isInvalid={false} />
          <Select placeholder="Hello" size="md" colorScheme={color} isInvalid={false} />
          <Select placeholder="Hello" size="md" colorScheme={color} isInvalid={true} />
          <Select placeholder="Hello" size="md" colorScheme={color} disabled={true} isInvalid={false} />
          <Select placeholder="Hello" size="lg" colorScheme={color} isInvalid={false} />
          <Select placeholder="Hello" size="lg" colorScheme={color} isInvalid={true} />
          <Select placeholder="Hello" size="lg" colorScheme={color} disabled={true} isInvalid={false} />
        </Stack>
      ))}
      </Wrapper>
  );
};
SelectIndex.storyName = 'Select';
