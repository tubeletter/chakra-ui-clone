import styled from 'styled-components';
import Button, { ButtonProps } from './Button';

const IconDummy = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7793 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7793 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5ZM11.472 16.494C11.647 16.704 11.823 16.908 12 17.103C12.177 16.908 12.353 16.705 12.528 16.494C12.176 16.5015 11.824 16.5015 11.472 16.494ZM9.477 16.369C8.70906 16.2891 7.9462 16.1662 7.192 16.001C7.117 16.351 7.06 16.691 7.022 17.017C6.832 18.6 7.097 19.562 7.5 19.794C7.903 20.027 8.868 19.775 10.145 18.82C10.408 18.623 10.673 18.404 10.939 18.165C10.4185 17.5941 9.9304 16.9945 9.477 16.369ZM16.808 16.001C16.091 16.161 15.325 16.285 14.523 16.369C14.0696 16.9945 13.5815 17.5941 13.061 18.165C13.327 18.405 13.592 18.623 13.855 18.82C15.132 19.775 16.097 20.027 16.5 19.794C16.903 19.562 17.167 18.6 16.979 17.017C16.9377 16.6759 16.881 16.3369 16.809 16.001H16.808ZM18.258 15.614C18.835 18.253 18.532 20.354 17.25 21.094C15.968 21.834 13.997 21.046 12 19.227C10.003 21.046 8.032 21.833 6.75 21.093C5.468 20.353 5.165 18.253 5.741 15.613C3.167 14.794 1.5 13.48 1.5 12C1.5 10.52 3.167 9.20699 5.741 8.38599C5.165 5.74699 5.468 3.64599 6.75 2.90599C8.032 2.16599 10.003 2.95399 12 4.77299C13.997 2.95399 15.968 2.16699 17.25 2.90699C18.532 3.64699 18.835 5.74699 18.259 8.38699C20.833 9.20599 22.5 10.52 22.5 12C22.5 13.48 20.833 14.793 18.259 15.614H18.258ZM10.938 5.83499C10.6837 5.6048 10.4191 5.38624 10.145 5.17999C8.868 4.22499 7.903 3.97299 7.5 4.20599C7.097 4.43799 6.833 5.39999 7.021 6.98299C7.061 7.30999 7.117 7.64899 7.191 7.99899C7.94553 7.83373 8.70872 7.71087 9.477 7.63099C9.952 6.97799 10.442 6.37699 10.939 5.83499H10.938ZM14.523 7.63099C15.325 7.71499 16.091 7.83999 16.808 7.99899C16.883 7.64899 16.94 7.30899 16.978 6.98299C17.168 5.39999 16.903 4.43799 16.5 4.20599C16.097 3.97299 15.132 4.22499 13.855 5.17999C13.5806 5.38622 13.3156 5.60477 13.061 5.83499C13.558 6.37699 14.048 6.97799 14.523 7.63099ZM12.528 7.50599C12.353 7.29599 12.177 7.09199 12 6.89699C11.823 7.09199 11.647 7.29499 11.472 7.50599C11.824 7.49852 12.176 7.49852 12.528 7.50599ZM8.372 14.704C8.18956 14.4031 8.01352 14.0984 7.844 13.79C7.749 14.047 7.661 14.3 7.581 14.551C7.838 14.607 8.102 14.658 8.371 14.704H8.372ZM10.304 14.938C11.4331 15.0219 12.5669 15.0219 13.696 14.938C14.3332 14.0019 14.9001 13.0199 15.392 12C14.9001 10.9801 14.3332 9.99804 13.696 9.06199C12.5669 8.97813 11.4331 8.97813 10.304 9.06199C9.6668 9.99804 9.09991 10.9801 8.608 12C9.09991 13.0199 9.6668 14.0019 10.304 14.938ZM16.156 10.21C16.251 9.95299 16.339 9.69999 16.419 9.44899C16.1568 9.3921 15.8934 9.34109 15.629 9.29599C15.8111 9.5969 15.9868 9.90164 16.156 10.21ZM6.13 9.83699C5.79 9.94699 5.468 10.067 5.166 10.197C3.701 10.825 3 11.535 3 12C3 12.465 3.7 13.175 5.166 13.803C5.468 13.933 5.79 14.053 6.13 14.163C6.352 13.463 6.627 12.737 6.955 12C6.63982 11.295 6.36439 10.5728 6.13 9.83699ZM7.58 9.44899C7.661 9.69899 7.749 9.95299 7.844 10.209C8.01353 9.90096 8.18957 9.59656 8.372 9.29599C8.102 9.34199 7.838 9.39299 7.581 9.44899H7.58ZM17.87 14.163C18.21 14.053 18.532 13.933 18.834 13.803C20.299 13.175 21 12.465 21 12C21 11.535 20.3 10.825 18.834 10.197C18.5183 10.0625 18.1966 9.94237 17.87 9.83699C17.648 10.537 17.373 11.263 17.045 12C17.373 12.737 17.648 13.462 17.87 14.163ZM16.42 14.551C16.339 14.301 16.251 14.047 16.156 13.791C15.9865 14.099 15.8104 14.4034 15.628 14.704C15.898 14.658 16.162 14.607 16.419 14.551H16.42Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default {
  title: 'chakra-ui-styled/components/form/button',
  component: Button,
  parameters: { controls: { expanded: true } },

  argTypes: {
    as: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    variant: { control: { type: 'radio' } },
    leftIcon: { control: { type: 'text' } },
    rightIcon: { control: { type: 'text' } }
  },
  args: {
    children: '안녕',
    size: 'lg',
    colorScheme: 'blue',
    variant: 'solid',
    leftIcon: <IconDummy />,
    rightIcon: <IconDummy />
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

export const ButtonIndex = (args: ButtonProps) => {
  const btnText: string = 'Button';
  return (
    <Wrapper>
      <h1>Button</h1>

      <h2>Button Demo</h2>
      <div>
        <Button {...args} />
      </div>

      <h2>Button Index</h2>
      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="blue">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="blue">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="blue">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="gray">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="gray">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="gray">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="teal">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="teal">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="teal">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="red">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="red">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="red">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="orange">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="orange">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="orange">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="yellow">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="yellow">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="yellow">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="pink">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="pink">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="pink">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="purple">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="purple">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="purple">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" colorScheme="green">
          {btnText}
        </Button>
      </BtnBox>

      <BtnBox>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="lg" variant="outline" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="md" variant="outline" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="sm" variant="outline" colorScheme="green">
          {btnText}
        </Button>
        <Button leftIcon={<IconDummy />} rightIcon={<IconDummy />} size="xs" variant="outline" colorScheme="green">
          {btnText}
        </Button>
      </BtnBox>
    </Wrapper>
  );
};
ButtonIndex.storyName = 'Button';
