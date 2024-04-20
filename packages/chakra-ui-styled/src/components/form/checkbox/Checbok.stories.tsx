import styled from 'styled-components';
import Checkbox, { CheckboxProps, colorSchemeType } from './Checkbox';

export default {
  title: 'chakra-ui-styled/components/form/checkbox',
  component: Checkbox,
  parameters: { controls: { expanded: true } },

  argTypes: {
    text: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    isChecked: { control: { type: 'boolean' } },
    isDisabled: { control: { type: 'boolean' } },
  },
  args: {
    text: '선택대상',
    size: 'md',
    colorScheme: 'blue',
    isChecked: true,
    isDisabled: false,
    isIndeterminate: true
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CheckboxGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 30%;
  gap: 5px 0px;
`;
export const CheckboxIndex = (args: CheckboxProps) => {
  const chkText: string = 'Checkbox Label';
  const colorArr: colorSchemeType[] = ['blue', 'teal', 'green', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Checkbox</h1>

      <h2>Checkbox Demo</h2>
      <div>
        <Checkbox {...args} />
      </div>

      <h2>Checkbox Index</h2>
      {colorArr.map((color) => (
        <CheckboxGroup>
          <Checkbox size="sm" colorScheme={color} isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
          <Checkbox size="md" colorScheme={color} isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
          <Checkbox size="lg" colorScheme={color} isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

          <Checkbox size="sm" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
          <Checkbox size="md" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
          <Checkbox size="lg" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

          <Checkbox size="sm" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
          <Checkbox size="md" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
          <Checkbox size="lg" colorScheme={color} isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

          <Checkbox size="sm" colorScheme={color} isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
          <Checkbox size="md" colorScheme={color} isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
          <Checkbox size="lg" colorScheme={color} isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

          <Checkbox size="sm" colorScheme={color} isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
          <Checkbox size="md" colorScheme={color} isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
          <Checkbox size="lg" colorScheme={color} isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        </CheckboxGroup>
      ))}
      {/* <CheckboxGroup>
        <Checkbox size="sm" colorScheme="teal" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="teal" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="teal" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="md" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="lg" colorScheme="teal" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

        <Checkbox size="sm" colorScheme="teal" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="teal" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="teal" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="teal" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="teal" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="teal" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="sm" colorScheme="green" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="green" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="green" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="md" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="lg" colorScheme="green" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

        <Checkbox size="sm" colorScheme="green" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="green" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="green" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="green" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="green" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="green" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="sm" colorScheme="cyan" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="cyan" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="cyan" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="md" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="lg" colorScheme="cyan" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

        <Checkbox size="sm" colorScheme="cyan" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="cyan" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="cyan" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="cyan" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="cyan" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="cyan" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="sm" colorScheme="purple" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="purple" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="purple" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="md" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="lg" colorScheme="purple" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

        <Checkbox size="sm" colorScheme="purple" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="purple" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="purple" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="purple" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="purple" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="purple" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="sm" colorScheme="pink" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="pink" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="pink" isChecked={false} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="md" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />
        <Checkbox size="lg" colorScheme="pink" isChecked={true} isDisabled={false} isIndeterminate={true} text={chkText} />

        <Checkbox size="sm" colorScheme="pink" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="pink" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="pink" isChecked={false} isDisabled={true} isIndeterminate={false} text={chkText} />

        <Checkbox size="sm" colorScheme="pink" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="md" colorScheme="pink" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
        <Checkbox size="lg" colorScheme="pink" isChecked={true} isDisabled={true} isIndeterminate={false} text={chkText} />
      </CheckboxGroup> */}
    </Wrapper>
  );
};
CheckboxIndex.storyName = 'Checkbox';