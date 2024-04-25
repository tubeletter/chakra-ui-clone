import styled from 'styled-components';
import CloseButton, { CloseButtonProps } from './CloseButton';

const Icon = () => {
  return (
    <svg width="currentSize" height="currentSize" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 10.8891L15.8891 7L17 8.11094L13.1109 12L17 15.8891L15.8891 17L12 13.1109L8.11094 17L7 15.8891L10.8891 12L7 8.11094L8.11094 7L12 10.8891Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default {
  title: 'chakra-ui-styled/components/form/closebutton',
  component: CloseButton,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } }
  },
  args: {
    size: 'sm',
    icon: <Icon />
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
      <CloseButton size="sm" icon={<Icon />} />
      <CloseButton size="md" icon={<Icon />} />
      <CloseButton size="lg" icon={<Icon />} />
    </Wrapper>
  );
};
CloseButtonIndex.storyName = 'CloseButton';
