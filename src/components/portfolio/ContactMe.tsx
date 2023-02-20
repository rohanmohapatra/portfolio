import {
  Button,
  ChakraProvider,
  Link as ChakraLink,
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
import { theme } from '../Theme';

export const ContactMe: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  if (
    location.pathname.includes('blog') ||
    location.pathname.includes('resume')
  ) {
    return null;
  }
  return (
    <ChakraProvider theme={theme}>
      <ChakraLink
        className="navbar__item navbar__link"
        onClick={onOpen}
        cursor="pointer"
        textDecoration="none !important"
      >
        Contact Me
      </ChakraLink>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Want to connect?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Email me at{' '}
            <ChakraLink color="red.500">rohannmohapatra@gmail.com</ChakraLink>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
