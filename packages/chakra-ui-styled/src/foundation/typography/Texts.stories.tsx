import styled from 'styled-components';
import { TextComponent, TextProps } from './Text';

export default {
  title: 'chakra-ui-styled/foundation/typography/Text',
  component: TextComponent,
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
        <TextComponent {...args} />
      </div>
      <h2>2. Texts Size Demo</h2>
      <div>
        <TextComponent size="6xl">{text}</TextComponent>
        <TextComponent size="5xl">{text}</TextComponent>
        <TextComponent size="4xl">{text}</TextComponent>
        <TextComponent size="3xl">{text}</TextComponent>
        <TextComponent size="2xl">{text}</TextComponent>
        <TextComponent size="xl">{text}</TextComponent>
        <TextComponent size="lg">{text}</TextComponent>
        <TextComponent size="md">{text}</TextComponent>
        <TextComponent size="sm">{text}</TextComponent>
        <TextComponent size="xs">{text}</TextComponent>
      </div>
    </Wrapper>
  );
};
