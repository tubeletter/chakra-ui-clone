import styled from 'styled-components';
import Button from './Button';

export default {
  title: 'chakra-ui-styled/components/button',
  parameters: {
    viewport: {}
  }
};
const BtnBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ButtonIndex = () => {
  const btnText: string = 'Button';
  return (
    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <h2>Button</h2>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="blue" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="blue" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="blue" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="gray" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="gray" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="gray" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="teal" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="teal" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="teal" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="red" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="red" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="red" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="orange" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="orange" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="orange" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="yellow" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="yellow" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="yellow" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="pink" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="pink" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="pink" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="purple" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="purple" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="purple" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" colorScheme="green" text={btnText} />
      </BtnBox>

      <BtnBox>
        <Button leftIcon="CkReact" rightIcon="CkReact" size="lg" outlineStyle colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="md" outlineStyle colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="sm" outlineStyle colorScheme="green" text={btnText} />
        <Button leftIcon="CkReact" rightIcon="CkReact" size="xs" outlineStyle colorScheme="green" text={btnText} />
      </BtnBox>
    </div>
  );
};
ButtonIndex.storyName = 'Button';
