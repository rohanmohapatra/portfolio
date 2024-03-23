import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle((props) => ({
  dialog: {
    borderRadius: 'lg',
    bg: props.colorMode === 'dark' ? 'gray.1000' : 'white'
  },
  header: {
    color: props.colorMode === 'dark' ? 'white' : 'gray.1000'
  },
  closeButton: {
    _focus: { boxShadow: '0 0 0 3px rgba(255, 79, 91, 0.3)' }
  }
}));

export const Modal = defineMultiStyleConfig({
  baseStyle
});
