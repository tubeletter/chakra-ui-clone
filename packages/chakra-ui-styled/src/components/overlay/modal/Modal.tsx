import { StyleModal, ModalOverlay, ModalContent, ModalHeader, StyledCloseButton, ModalBody, ModalFooter } from './Modal.styled';
import { useState } from 'react';
import Button from '../../form/button/Button';
import { CloseIconStyle } from '../../form/closebutton/CloseButton.styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLImageElement> {
  as?: React.ElementType;
  size: 'lg' | 'md' | 'sm' | 'xs';
  colorScheme: 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';
  variant?: 'solid' | 'outline';
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  // 클릭기능을 확장하려 했으나 반영이 되지 않음
}
export interface ModalProps {
  isOpen: boolean,
  title?: string;
  contents?: string;
}

const Modal = ({ isOpen, title, contents }: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const openModal = ()=> setModalIsOpen(true);
  const closeModal = ()=> setModalIsOpen(false);
  
  const ExtendButton: React.FunctionComponent<ButtonProps> = ({...rest}) => {
    return <Button {...rest} />;
  };
  return (
    <>
      <button onClick={openModal}>임시버튼</button>
      <ExtendButton size={'md'} colorScheme={'gray'} onClick={openModal}> Open Modal </ExtendButton>
      
      <StyleModal isOpen={modalIsOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {title} </ModalHeader>
          <StyledCloseButton size={'md'} onClick={closeModal} icon={<CloseIconStyle />}/>
          
          <ModalBody> {contents} </ModalBody>

          <ModalFooter>
            <ExtendButton size={'md'} colorScheme={'blue'} onClick={closeModal}> Close </ExtendButton>
            <ExtendButton size={'md'} colorScheme={'gray'} onClick={closeModal}> Cancel </ExtendButton>
          </ModalFooter>
        </ModalContent>
      </StyleModal>
    </>
  )
}
export default Modal;
