import { createSystem, defaultConfig } from '@chakra-ui/react';
import { button } from '@/components/recipes/button';
import { heading } from '@/components/recipes/heading';

export const system = createSystem(defaultConfig, {
  globalCss: {
    '.c-reset': {
      bg: { base: '{colors.zinc.50}', _dark: '{colors.zinc.950}' },
      color: { base: '{colors.zinc.950}', _dark: '{colors.zinc.50}' }
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Manrope', sans-serif` },
        body: { value: `'Manrope', sans-serif` }
      },
      colors: {
        gray: {
          1000: { value: '#0F0F0F' }
        },
        zinc: {
          50: { value: '#fafafa' },
          100: { value: '#f4f4f5' },
          200: { value: '#e4e4e7' },
          300: { value: '#d4d4d8' },
          400: { value: '#a1a1aa' },
          500: { value: '#71717a' },
          600: { value: '#52525b' },
          700: { value: '#3f3f46' },
          800: { value: '#27272a' },
          900: { value: '#18181b' },
          950: { value: '#09090b' }
        }
      }
    },
    recipes: { heading, button }
  },
  preflight: {
    scope: '.c-reset'
  }
});
