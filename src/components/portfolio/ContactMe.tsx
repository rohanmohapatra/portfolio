import {
  Button,
  Link as ChakraLink,
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
import React from 'react';

export const ContactMe: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const location = useLocation();
  // if (location.pathname.includes('blog')) {
  //   return null;
  // }
  return (
    <>
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
        <ModalContent bgColor={useColorModeValue('white', '#0F0F0F')}>
          <ModalHeader>Want to connect?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Email me at
            <ChakraLink color="red.500">rohannmohapatra@gmail.com</ChakraLink>
          </ModalBody>

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
