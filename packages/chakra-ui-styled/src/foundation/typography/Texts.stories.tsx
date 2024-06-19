import styled from 'styled-components';
import { BaseText, TextProps } from './Text';

export default {
  title: 'chakra-ui-styled/foundation/typography/Text',
  component: Text,
  parameters: { controls: { expanded: true } },
  argTypes: {
    children: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    weight: { control: { type: 'select' } },
    lineHeight: { control: { type: 'select' } }
  },
  args: {
    children: '텍스트 컴포넌트 args 테스트',
    size: 'md'
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Texts = (args: TextProps) => {
  const text = 'In love with Chakra';
  return (
    <Wrapper>
      <h1>Texts</h1>

      <h2>1. Texts Demo</h2>
      <div>
        <BaseText {...args} />
      </div>
      <h2>2.Texts Size Demo</h2>
      <div>
        <BaseText size="6xl">{text}</BaseText>
        <BaseText size="5xl">{text}</BaseText>
        <BaseText size="4xl">{text}</BaseText>
        <BaseText size="3xl">{text}</BaseText>
        <BaseText size="2xl">{text}</BaseText>
        <BaseText size="xl">{text}</BaseText>
        <BaseText size="lg">{text}</BaseText>
        <BaseText size="md">{text}</BaseText>
        <BaseText size="sm">{text}</BaseText>
        <BaseText size="xs">{text}</BaseText>
      </div>
    </Wrapper>
  );
};
