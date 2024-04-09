import styled from 'styled-components';
import { TextComponent, TextProps } from './Text';

export default {
  title: 'chakra-ui-styled/foundation/typography/Text',
  component: TextComponent,
  parameters: { controls: { expanded: true } },
  argTypes: {
    children: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    weight: { control: { type: 'select' } }
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
        <TextComponent size="6xl" children={text} />
        <TextComponent size="5xl" children={text} />
        <TextComponent size="4xl" children={text} />
        <TextComponent size="3xl" children={text} />
        <TextComponent size="2xl" children={text} />
        <TextComponent size="xl" children={text} />
        <TextComponent size="lg" children={text} />
        <TextComponent size="md" children={text} />
        <TextComponent size="sm" children={text} />
        <TextComponent size="xs" children={text} />
      </div>
    </Wrapper>
  );
};
