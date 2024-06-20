import styled from 'styled-components';
import Kbd, { KbdProps } from './Kbd';

export default {
  title: 'chakra-ui-styled/components/Kbd',
  component: Kbd,
  parameters: { controls: { expanded: true } },

  argTypes: {
    children: { control: { type: 'text' } }
  },
  args: {
    children: 'shift'
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const KbdIndex = (args: KbdProps) => {
  const KbdText: string = '⌘K';
  return (
    <Wrapper>
      <h1>Kbd</h1>

      <h2>Kbd Demo</h2>
      <div>
        <Kbd {...args} />
      </div>

      <h2>Kbd Index</h2>
      <Kbd>{KbdText}</Kbd>
    </Wrapper>
  );
};
KbdIndex.storyName = 'Kbd';
