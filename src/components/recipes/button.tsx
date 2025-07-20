import { defineRecipe } from '@chakra-ui/react';

export const button = defineRecipe({
  variants: {
    visual: {
      navigation: {
        backgroundColor: 'transparent',
        position: 'relative',
        textDecoration: 'none',
        _focus: { boxShadow: 'none' },
        color: 'gray.1000',
        _dark: {
          color: 'white'
        },
        _hover: {
          backgroundColor: 'transparent',
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
      }
    }
  }
});
