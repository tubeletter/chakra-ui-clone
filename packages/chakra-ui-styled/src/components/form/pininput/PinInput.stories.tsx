import styled from 'styled-components';
import PinInput, { PinInputProps } from './PinInput';

export default {
  title: 'chakra-ui-styled/components/form/pininput',
  component: PinInput,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    numOfInputs: { control: { type: 'number' } },
  },
  args: {
    size: 'sm',
    colorScheme: 'blue',
    numOfInputs: 4,
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PinInputIndex = (args: PinInputProps) => {
  return (
    <Wrapper>
      <h1>PinInput</h1>

      <h2>PinInput Demo</h2>
      <div>
        <PinInput {...args} />
      </div>
    </Wrapper>
  );
};
PinInputIndex.storyName = 'PinInput';
