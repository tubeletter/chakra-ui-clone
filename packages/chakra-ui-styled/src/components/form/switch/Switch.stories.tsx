import styled from 'styled-components';
import Switch, { SwitchProps, colorSchemeType } from './Switch';

export default {
  title: 'chakra-ui-styled/components/form/switch',
  component: Switch,
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
const SwitchGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 30%;
  gap: 5px 0px;
`;
export const SwitchIndex = (args: SwitchProps) => {
  const switchText: string = 'Switch Label';
  const colorArr: colorSchemeType[] = ['blue', 'teal', 'green', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Switch</h1>

      <h2>Switch Demo</h2>
      <div>
        <Switch {...args} />
      </div>

      <h2>Switch Index</h2>
      {colorArr.map((color) => (
        <SwitchGroup>
          <Switch size="sm" colorScheme={color} defaultChecked={false} isDisabled={false} text={switchText} />
          <Switch size="md" colorScheme={color} defaultChecked={false} isDisabled={false} text={switchText} />
          <Switch size="lg" colorScheme={color} defaultChecked={false} isDisabled={false} text={switchText} />

          <Switch size="sm" colorScheme={color} defaultChecked={true} isDisabled={false} text={switchText} />
          <Switch size="md" colorScheme={color} defaultChecked={true} isDisabled={false} text={switchText} />
          <Switch size="lg" colorScheme={color} defaultChecked={true} isDisabled={false} text={switchText} />

          <Switch size="sm" colorScheme={color} defaultChecked={false} isDisabled={true} text={switchText} />
          <Switch size="md" colorScheme={color} defaultChecked={false} isDisabled={true} text={switchText} />
          <Switch size="lg" colorScheme={color} defaultChecked={false} isDisabled={true} text={switchText} />

          <Switch size="sm" colorScheme={color} defaultChecked={true} isDisabled={true} text={switchText} />
          <Switch size="md" colorScheme={color} defaultChecked={true} isDisabled={true} text={switchText} />
          <Switch size="lg" colorScheme={color} defaultChecked={true} isDisabled={true} text={switchText} />
        </SwitchGroup>
      ))}
    </Wrapper>
  );
};
SwitchIndex.storyName = 'Switch';