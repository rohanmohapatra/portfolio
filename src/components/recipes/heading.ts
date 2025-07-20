import { defineRecipe } from '@chakra-ui/react';

export const heading = defineRecipe({
  variants: {
    code: {
      true: { color: 'red.500', fontFamily: 'var(--font-mono)' }
    }
  }
});
