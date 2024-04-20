import styled from 'styled-components';
import Radio, { RadioProps, colorSchemeType } from './Radio';


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
  const colorArr: colorSchemeType[] = ['blue', 'teal', 'green', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Radio</h1>

      <h2>Radio Demo</h2>
      <div>
        <Radio {...args} />
      </div>

      <h2>Radio Index</h2>
      {colorArr.map((color) => (
        <RadioGroup>
          <Radio size="sm" colorScheme={color} defaultChecked={false} isDisabled={false} text={radioText} />
          <Radio size="md" colorScheme={color} defaultChecked={false} isDisabled={false} text={radioText} />
          <Radio size="lg" colorScheme={color} defaultChecked={false} isDisabled={false} text={radioText} />

          <Radio size="sm" colorScheme={color} defaultChecked={true} isDisabled={false} text={radioText} />
          <Radio size="md" colorScheme={color} defaultChecked={true} isDisabled={false} text={radioText} />
          <Radio size="lg" colorScheme={color} defaultChecked={true} isDisabled={false} text={radioText} />

          <Radio size="sm" colorScheme={color} defaultChecked={false} isDisabled={true} text={radioText} />
          <Radio size="md" colorScheme={color} defaultChecked={false} isDisabled={true} text={radioText} />
          <Radio size="lg" colorScheme={color} defaultChecked={false} isDisabled={true} text={radioText} />

          <Radio size="sm" colorScheme={color} defaultChecked={true} isDisabled={true} text={radioText} />
          <Radio size="md" colorScheme={color} defaultChecked={true} isDisabled={true} text={radioText} />
          <Radio size="lg" colorScheme={color} defaultChecked={true} isDisabled={true} text={radioText} />
        </RadioGroup>
      ))}
    </Wrapper>
  );
};
RadioIndex.storyName = 'Radio';