import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useLocation } from '@docusaurus/router';
import React from 'react';
export const ContactMe: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  if (location.pathname.includes('blog')) {
    return null;
  }
  return (
    <>
      <Button variant="link" class="navbar__item navbar__link" onClick={onOpen}>
        Contact Me
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me at</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hello World</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
