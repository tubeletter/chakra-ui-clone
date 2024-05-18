import styled from 'styled-components';
import { InputSize } from './InputGroup';
import Input, { InputType } from './Input';

export default {
  title: 'chakra-ui-styled/components/form/Input/Input',
  component: Input,
  parameters: { controls: { expanded: true } },

  argTypes: {
    $size: { control: { type: 'select' } },
    $variant: { control: { type: 'select' } },
    $isInvalid: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } }
  },
  args: {
    $size: 'xs',
    $variant: 'outline',
    $isInvalid: false,
    disabled: false,
    readOnly: false
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const InputIndex = (args: InputType) => {
  const inputArr: InputSize[] = ['xs', 'sm', 'md', 'lg'];
  return (
    <Wrapper>
      <h1>InputIndex</h1>
      <h2>InputIndex Demo</h2>
      <div>
        <Input {...args} />
      </div>
      <h2>Input Index</h2>
      {inputArr.map((size, idx) => (
        <BtnBox>
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="outline"
            $isInvalid={false}
            id={'outline-' + size + '-1'}
            name={'outline-' + size + '-1'}
          />
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="outline"
            $isInvalid={true}
            id={'outline-' + size + '-2'}
            name={'outline-' + size + '-2'}
          />
          <Input
            $size={size}
            disabled={true}
            readOnly={false}
            $variant="outline"
            $isInvalid={false}
            id={'outline-' + size + '-3'}
            name={'outline-' + size + '-3'}
          />
        </BtnBox>
      ))}
      <br /> <br /> <br />
      {inputArr.map((size, idx) => (
        <BtnBox>
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="flushed"
            $isInvalid={false}
            id={'flushed-' + size + '-1'}
            name={'flushed-' + size + '-1'}
          />
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="flushed"
            $isInvalid={true}
            id={'flushed-' + size + '-2'}
            name={'flushed-' + size + '-2'}
          />
          <Input
            $size={size}
            disabled={true}
            readOnly={false}
            $variant="flushed"
            $isInvalid={false}
            id={'flushed-' + size + '-3'}
            name={'flushed-' + size + '-3'}
          />
        </BtnBox>
      ))}
      <br /> <br /> <br />
      {inputArr.map((size) => (
        <BtnBox>
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="filled"
            $isInvalid={false}
            id={'filled-' + size + '-1'}
            name={'filled-' + size + '-1'}
          />
          <Input
            $size={size}
            disabled={false}
            readOnly={false}
            $variant="filled"
            $isInvalid={true}
            id={'filled-' + size + '-2'}
            name={'filled-' + size + '-2'}
          />
          <Input
            $size={size}
            disabled={true}
            readOnly={false}
            $variant="filled"
            $isInvalid={false}
            id={'filled-' + size + '-3'}
            name={'filled-' + size + '-3'}
          />
        </BtnBox>
      ))}
    </Wrapper>
  );
};
InputIndex.storyName = 'Input';
