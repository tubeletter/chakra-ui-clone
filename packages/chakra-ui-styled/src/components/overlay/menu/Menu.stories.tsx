import styled from 'styled-components';
import Menu, { MenuProps } from './Menu';


export default {
  title: 'chakra-ui-styled/components/overlay/menu',
  component: Menu,
  parameters: { controls: { expanded: true } },

  argTypes: {
    isOpen: { control: { type: 'boolean' } }
  },
  args: {
    isOpen: false
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuIndex = (args: MenuProps) => {
  return (
    <Wrapper>
      <h1>Menu</h1>

      <h2>Menu Demo</h2>
      <Menu {...args} />
    </Wrapper>
  );
};
MenuIndex.storyName = 'Menu';
