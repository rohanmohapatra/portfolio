import { StyleFunctionProps, defineStyleConfig } from '@chakra-ui/react';

import { fonts } from '../lib/fonts';

export const Button = defineStyleConfig({
  baseStyle: {
    _focus: { boxShadow: '0 0 0 3px rgba(255, 79, 91, 0.3)' }
  },
  variants: {
    solid: {
      _hover: {
        bg: 'red.300'
      }
    },
    ghost: {
      _hover: {
        // bg: 'red.100'
      }
    },
    outline: {
      fontSize: 'lg',
      borderRadius: 'md',
      px: '2rem',
      fontFamily: fonts.notoSansMono.style.fontFamily,
      border: '1px solid',
      borderColor: 'red.500',
      color: 'red.500',
      _hover: {
        bg: 'red.100'
      }
    },
    nav: (props: StyleFunctionProps) => ({
      position: 'relative',
      textDecoration: 'none',
      _focus: { boxShadow: 'none' },
      color: props.colorMode === 'light' ? 'gray.1000' : 'white',
      _hover: {
        _before: {
          transform: 'scaleX(1)'
        }
      },
      _active: {},
      _before: {
        bg: 'red.500',
        content: '""',
        position: 'absolute',
        display: 'block',
        width: '100%',
        transform: 'scaleX(0)',
        height: '0.1rem',
        bottom: 0,
        left: 0,
        transition: 'transform 0.3s ease'
      }
    })
  }
});
