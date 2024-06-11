import { StyleMenu, MenuList, MenuItem, MenuDivider } from './Menu.styled';
import { useState } from 'react';
import Button from '../../form/button/Button';

export interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenu = () => setMenuIsOpen(!isOpen);

  return (
    <StyleMenu>
      <Button size={'md'} colorScheme={'gray'} onClick={openMenu}>
        {isOpen ? 'MenuClose' : 'MenuOpen'}
      </Button>

      <MenuList isOpen={menuIsOpen}>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Payments</MenuItem>
        <MenuDivider/>
        <MenuItem>Docs</MenuItem>
      </MenuList>
    </StyleMenu>
  );
};
export default Menu;
