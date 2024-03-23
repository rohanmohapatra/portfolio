import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    _focus: { boxShadow: '0 0 0 3px rgba(255, 79, 91, 0.3)' },
    _checked: {
      bg: 'red.500'
    }
  }
});
export const Switch = defineMultiStyleConfig({ baseStyle });
