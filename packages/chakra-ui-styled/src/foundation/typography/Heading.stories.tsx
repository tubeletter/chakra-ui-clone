import styled from 'styled-components';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'chakra-ui-styled/foundation/typography/Heading',
  component: Heading,
  parameters: { controls: { expanded: true } },
  argTypes: {
    children: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    weight: { control: { type: 'select' } },
    lineHeight: { control: { type: 'select' } }
  },
  args: {
    children: 'Heading 컴포넌트 args 테스트',
    size: 'md',
    weight: 'normal'
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const text = 'In love with Chakra';

export const Large = (args: HeadingProps) => {
  return (
    <Wrapper>
      <h1>Heading Large</h1>

      <h2>1. Heading Demo</h2>
      <div>
        <Heading {...args} />
      </div>
      <h2>2. Heading Size Demo</h2>
      <div>
        <Heading size="4xl" as="h1" children={text} />
        <Heading size="3xl" as="h1" children={text} />
        <Heading size="2xl" as="h2" children={text} />
        <Heading size="xl" as="h2" children={text} />
        <Heading size="lg" as="h3" children={text} />
        <Heading size="md" as="h3" children={text} />
        <Heading size="sm" as="h4" children={text} />
        <Heading size="xs" as="h4" children={text} />
      </div>
    </Wrapper>
  );
};
export const Small = (args: HeadingProps) => {
  return (
    <Wrapper>
      <h1>Heading Small</h1>

      <h2>1. Heading Demo</h2>
      <div>
        <Heading {...args} />
      </div>
      <h2>2. Heading Size Demo</h2>
      <div>
        <Heading size="4xl" as="h1">
          {text}
        </Heading>
        <Heading size="3xl" as="h1">
          {text}
        </Heading>
        <Heading size="2xl" as="h2">
          {text}
        </Heading>
        <Heading size="xl" as="h2">
          {text}
        </Heading>
        <Heading size="lg" as="h3">
          {text}
        </Heading>
        <Heading size="md" as="h3">
          {text}
        </Heading>
        <Heading size="sm" as="h4">
          {text}
        </Heading>
        <Heading size="xs" as="h4">
          {text}
        </Heading>
      </div>
    </Wrapper>
  );
};
Small.story = {
  parameters: {
    viewport: { defaultViewport: 'sm' }
  }
};
