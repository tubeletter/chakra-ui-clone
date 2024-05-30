import { StyleModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from './Modal.styled';
import { useState } from 'react';
import Button from '../../form/button/Button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLImageElement> {
  as?: React.ElementType;
  size: 'lg' | 'md' | 'sm' | 'xs';
  colorScheme: 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';
  variant?: 'solid' | 'outline';
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}
export interface ModalProps {
  title?: string;
  contents?: string;
}

const Modal = ({ title, contents }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = ()=> {setIsOpen(true)};
  const onClose = ()=> {setIsOpen(false)};
  
  
  const ExtendButton: React.FunctionComponent<ButtonProps> = ({...rest}) => {
    return <Button {...rest} />;
  };

  return (
    <>
      <ExtendButton size={'md'} colorScheme={'gray'} onClick={onOpen}> Open Modal </ExtendButton>
      
      <StyleModal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {title} </ModalHeader>
          <ModalCloseButton size={'md'} onClick={onClose}/>
          
          <ModalBody> {contents} </ModalBody>

          <ModalFooter>
            <ExtendButton size={'md'} colorScheme={'blue'} onClick={onClose}> Close </ExtendButton>
            <ExtendButton size={'md'} colorScheme={'gray'} > Cancel </ExtendButton>
          </ModalFooter>
        </ModalContent>
      </StyleModal>
    </>
  )
}
export default Modal;
