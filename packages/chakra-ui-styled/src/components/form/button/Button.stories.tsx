import styled from 'styled-components';
import Button, { ButtonProps } from './Button';

export default {
  title: 'chakra-ui-styled/components/form/button',
  component: Button,
  parameters: { controls: { expanded: true } },

  argTypes: {
    text: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    variant: { control: { type: 'radio' } },
    leftIcon: { control: { type: 'text' } },
    rightIcon: { control: { type: 'text' } }
  },
  args: {
    text: '안녕',
    size: 'lg',
    leftIcon: 'react',
    rightIcon: 'react',
    colorScheme: 'blue',
    variant: 'solid'
  }
};

const BtnBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const ButtonIndex = (args: ButtonProps) => {
  const btnText: string = 'Button';
  return (
    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <h1>Button</h1>

      <h2>Button Demo</h2>
      <div>
        <Button {...args} />
      </div>

      <h2>Button Index</h2>
      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="blue" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="blue" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="gray" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="gray" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="teal" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="teal" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="red" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="red" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="orange" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="lg"
          variant="outline"
          colorScheme="orange"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="md"
          variant="outline"
          colorScheme="orange"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="sm"
          variant="outline"
          colorScheme="orange"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="xs"
          variant="outline"
          colorScheme="orange"
          text={btnText}
        />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="yellow" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="lg"
          variant="outline"
          colorScheme="yellow"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="md"
          variant="outline"
          colorScheme="yellow"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="sm"
          variant="outline"
          colorScheme="yellow"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="xs"
          variant="outline"
          colorScheme="yellow"
          text={btnText}
        />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="pink" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="pink" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="purple" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="lg"
          variant="outline"
          colorScheme="purple"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="md"
          variant="outline"
          colorScheme="purple"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="sm"
          variant="outline"
          colorScheme="purple"
          text={btnText}
        />
        <Button
          leftIcon="CkReact"
          rightIcon="CkReact"
          size="xs"
          variant="outline"
          colorScheme="purple"
          text={btnText}
        />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="green" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" variant="outline" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" variant="outline" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" variant="outline" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" variant="outline" colorScheme="green" text={btnText} />
      </BtnBox>
    </div>
  );
};
ButtonIndex.storyName = 'Button';
