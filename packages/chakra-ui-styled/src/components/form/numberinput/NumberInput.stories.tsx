import styled from 'styled-components';
import NumberInput, { NumberInputProps, colorSchemeType } from './NumberInput';
import { IncrementStepperIconStyle, DecrementStepperIconStyle } from './NumberInputstyled';

export default {
  title: 'chakra-ui-styled/components/form/numberinput',
  component: NumberInput,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    value: { control: { type: 'number' } },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } }
  },
  args: {
    size: 'sm',
    colorScheme: 'blue',
    incrementIcon: <IncrementStepperIconStyle />,
    decrementIcon: <DecrementStepperIconStyle />,
    value: 1,
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
export const NumberInputIndex = (args: NumberInputProps) => {
  const colorArr: colorSchemeType[] = ['whiteAlpha', 'blackAlpha', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>NumberInput</h1>

      <h2>NumberInput Demo</h2>
      <div>
        <NumberInput {...args} />
      </div>

      <h2>NumberInput Index</h2>
      {colorArr.map((color) => (
        <Stack>
          <NumberInput size="xs" colorScheme={color} value={1} isInvalid={false}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="xs" colorScheme={color} value={1} disabled={true} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="xs" colorScheme={color} value={1} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />

          <NumberInput size="sm" colorScheme={color} value={1} isInvalid={false}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="sm" colorScheme={color} value={1} disabled={true} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="sm" colorScheme={color} value={1} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />

          <NumberInput size="md" colorScheme={color} value={1} isInvalid={false}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="md" colorScheme={color} value={1} disabled={true} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="md" colorScheme={color} value={1} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />

          <NumberInput size="lg" colorScheme={color} value={1} isInvalid={false}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="lg" colorScheme={color} value={1} disabled={true} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
          <NumberInput size="lg" colorScheme={color} value={1} isInvalid={true}
           incrementIcon={<IncrementStepperIconStyle />} decrementIcon={<DecrementStepperIconStyle />}
          />
        </Stack>
      ))}
    </Wrapper>
  );
};
NumberInputIndex.storyName = 'NumberInput';
