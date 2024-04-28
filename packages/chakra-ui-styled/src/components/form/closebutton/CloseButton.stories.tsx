import styled from 'styled-components';
import CloseButton, { CloseButtonProps } from './CloseButton';
import { CloseIconStyle } from './CloseButtonstyled';

export default {
  title: 'chakra-ui-styled/components/form/closebutton',
  component: CloseButton,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } }
  },
  args: {
    size: 'sm',
    icon: <CloseIconStyle />
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseButtonIndex = (args: CloseButtonProps) => {
  return (
    <Wrapper>
      <h1>CloseButton</h1>

      <h2>CloseButton Demo</h2>
      <div>
        <CloseButton {...args} />
      </div>

      <h2>CloseButton Index</h2>
      <CloseButton size="sm" icon={<CloseIconStyle />} />
      <CloseButton size="md" icon={<CloseIconStyle />} />
      <CloseButton size="lg" icon={<CloseIconStyle />} />
    </Wrapper>
  );
};
CloseButtonIndex.storyName = 'CloseButton';
