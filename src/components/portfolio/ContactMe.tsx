import {
  Button,
  ChakraProvider,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
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
      <Button variant="link" class="navbar__item navbar__link" onClick={onOpen}>
        Contact Me
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Want to connect?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Email me at <Link color="red.500">rohannmohapatra@gmail.com</Link>
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
