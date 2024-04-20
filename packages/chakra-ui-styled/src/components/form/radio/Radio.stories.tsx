import styled from 'styled-components';
import Radio, { RadioProps } from './Radio';


export default {
  title: 'chakra-ui-styled/components/form/radio',
  component: Radio,
  parameters: { controls: { expanded: true } },

  argTypes: {
    text: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    defaultChecked: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
  },
  args: {
    text: '선택대상',
    size: 'md',
    colorScheme: 'blue',
    defaultChecked: true,
    isDisabled: false,
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RadioGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 30%;
  gap: 5px 0px;
`;
export const RadioIndex = (args: RadioProps) => {
  const radioText: string = 'Radio Label';
  return (
    <Wrapper>
      <h1>Radio</h1>

      <h2>Radio Demo</h2>
      <div>
        <Radio {...args} />
      </div>

      <h2>Radio Index</h2>
      <RadioGroup>
        <Radio size="sm" colorScheme="blue" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="blue" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="blue" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="blue" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="blue" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="blue" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="blue" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="blue" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="blue" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="blue" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="blue" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="blue" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
      <RadioGroup>
        <Radio size="sm" colorScheme="teal" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="teal" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="teal" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="teal" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="teal" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="teal" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="teal" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="teal" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="teal" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="teal" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="teal" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="teal" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
      <RadioGroup>
        <Radio size="sm" colorScheme="green" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="green" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="green" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="green" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="green" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="green" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="green" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="green" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="green" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="green" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="green" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="green" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
      <RadioGroup>
        <Radio size="sm" colorScheme="cyan" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="cyan" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="cyan" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="cyan" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="cyan" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="cyan" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="cyan" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="cyan" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="cyan" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="cyan" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="cyan" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="cyan" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
      <RadioGroup>
        <Radio size="sm" colorScheme="purple" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="purple" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="purple" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="purple" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="purple" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="purple" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="purple" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="purple" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="purple" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="purple" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="purple" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="purple" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
      <RadioGroup>
        <Radio size="sm" colorScheme="pink" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="pink" defaultChecked={false} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="pink" defaultChecked={false} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="pink" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="md" colorScheme="pink" defaultChecked={true} isDisabled={false} text={radioText} />
        <Radio size="lg" colorScheme="pink" defaultChecked={true} isDisabled={false} text={radioText} />

        <Radio size="sm" colorScheme="pink" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="pink" defaultChecked={false} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="pink" defaultChecked={false} isDisabled={true} text={radioText} />

        <Radio size="sm" colorScheme="pink" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="md" colorScheme="pink" defaultChecked={true} isDisabled={true} text={radioText} />
        <Radio size="lg" colorScheme="pink" defaultChecked={true} isDisabled={true} text={radioText} />
      </RadioGroup>
    </Wrapper>
  );
};
RadioIndex.storyName = 'Radio';