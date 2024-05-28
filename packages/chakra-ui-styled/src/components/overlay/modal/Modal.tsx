import { StyleModal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, ModalBody, ModalFooter } from './Modal.styled';
import { ReactNode } from 'react';
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
  // isOpen: boolean;
  children?: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
// const Modal = ({ isOpen, children }: ModalProps) => {
  
  
  const onOpen = ()=>{}
  const onClose = ()=>{}
  const ExtendButton: React.FunctionComponent<ButtonProps> = ({...rest}) => {
    return <Button {...rest} />;
  };
  return (
    <>
      <ExtendButton size={'md'} colorScheme={'gray'} onClick={onOpen}>Open Modal</ExtendButton>

      <StyleModal>
      {/* <StyleModal isOpen={isOpen} onClose={onClose}> */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {children} </ModalHeader>
          <ModalCloseButton />
          
          <ModalBody> {children} </ModalBody>

          <ModalFooter>
            <ExtendButton size={'md'} colorScheme={'blue'} onClick={onClose}>
              Close
            </ExtendButton>
          </ModalFooter>
        </ModalContent>
      </StyleModal>
    </>
  )
}
export default Modal;
