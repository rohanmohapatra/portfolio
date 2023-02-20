import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const overrides: ThemeOverride = {
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  colors: {
    red: {
      '500': '#FF4F5B',
      '600': '#FF3643',
      '700': '#FF0214',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Poppins',
        fontWeight: 'semibold',
      },
    },
    Button: {
      baseStyle: { _focus: { boxShadow: 'none' } },
      variants: {
        solid: {
          bg: 'red.500',
          _hover: {
            bg: 'red.600',
          },
          color: 'white',
        },
        nav: {
          position: 'relative',
          textDecoration: 'none',
          _focus: { boxShadow: 'none' },
          color: 'gray.800',
          _hover: {
            _before: {
              transform: `scaleX(1)`,
            },
          },
          _active: {},
          _before: {
            bg: 'red.500',
            content: `""`,
            position: 'absolute',
            display: 'block',
            width: '100%',
            transform: `scaleX(0)`,
            height: '0.3rem',
            bottom: 0,
            left: 0,
            transition: 'transform 0.3s ease',
          },
        },
      },
      sizes: {
        '3xl': {
          width: '20rem',
          height: '12rem',
          padding: '2rem',
        },
      },
    },
    Spinner: {
      baseStyle: {
        color: 'red.500',
      },
    },
  },
};

export const theme = extendTheme(overrides);
