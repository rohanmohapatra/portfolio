import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const flushed = definePartsStyle({
  field: {
    borderBottom: '3px solid',
    borderColor: 'red.500',
    textAlign: 'center',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    _focus: {
      borderColor: 'red.500',
      boxShadow: '0 0px 0px 0 #FF4F5B'
    }
  }
});
export const Select = defineMultiStyleConfig({ variants: { flushed } });
