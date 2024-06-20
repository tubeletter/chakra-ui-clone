import styled from 'styled-components';

export const StyleMenu = styled.div`
  position: relative;
`;
export const MenuList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  border-radius: 12px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: calc(100% + 9px);
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
  border: 1px solid ${({ theme }) => theme.color.gray[200]};
  min-width: 278px;
`;
export const MenuItem = styled.div`
  ${({ theme }) => theme.typo.text.lg};
  display: flex;
  flex: 1;
  white-space: nowrap;
  gap: 10px;
  padding: 6px 22px;
  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.color.gray[200]};
  }
`;
export const MenuDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray[200]};
`;