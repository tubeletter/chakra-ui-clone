import styled from 'styled-components';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'chakra-ui-styled/components/overlay/tooltip',
  component: Tooltip,
  parameters: { controls: { expanded: true } },

  argTypes: {
    label: { control: { type: 'text' } },
    placement: { control: { type: 'select' } },
  },
  args: {
    label: 'Hover me',
    placement: 'auto',
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TooltipIndex = (args: TooltipProps) => {
  return (
    <Wrapper>
      <h1>Tooltip</h1>

      <h2>Tooltip Demo</h2>
      <div>
        <Tooltip {...args} />
      </div>
    </Wrapper>
  );
};
TooltipIndex.storyName = 'Tooltip';
