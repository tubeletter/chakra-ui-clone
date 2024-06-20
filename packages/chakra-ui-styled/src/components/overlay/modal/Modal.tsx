import {
  StyleModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  StyledCloseButton,
  ModalBody,
  ModalFooter
} from './Modal.styled';
import { useState } from 'react';
import Button from '../../form/button/Button';
import { CloseIconStyle } from '../../form/closebutton/CloseButton.styled';

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  contents?: string;
}

const Modal = ({ isOpen, title, contents }: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      {/* <button onClick={openModal}>임시버튼</button> */}
      <Button size={'md'} colorScheme={'gray'} onClick={openModal}>
        Open Modal
      </Button>

      <StyleModal isOpen={modalIsOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {title} </ModalHeader>
          <StyledCloseButton size={'md'} onClick={closeModal} icon={<CloseIconStyle />} />

          <ModalBody> {contents} </ModalBody>

          <ModalFooter>
            <Button size={'md'} colorScheme={'blue'} onClick={closeModal}>
              Close
            </Button>
            <Button size={'md'} colorScheme={'gray'} onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </StyleModal>
    </>
  );
};
export default Modal;
