import styled from 'styled-components';
import CloseButton from '../../form/closebutton/CloseButton';

export const StyleModal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.blackAlpha[600]};
  z-index: 100;
`;
export const ModalContent = styled.div`
  border-radius: 6px;
  background-color: #fff;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 6px -2px rgba(0,0,0,0.05), 0px 10px 15px -3px rgba(0,0,0,0.1);
  min-width: 448px;
  z-index: 110;
  
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  ${({ theme }) => theme.typo.text.lg};
`;
export const ModalBody = styled.div`
  padding: 8px 24px;
  ${({ theme }) => theme.typo.text.md};
`;
export const ModalFooter = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const StyledCloseButton = styled(CloseButton)`
    position: absolute;
    top: 8px;
    right: 16px;
  `