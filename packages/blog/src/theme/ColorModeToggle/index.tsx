import React from 'react';
import { ColorModeSwitch } from '@portfolio/shared';
import { Stack } from '@chakra-ui/react';

// eslint-disable-next-line no-unused-vars
export default function ColorModeToggleWrapper(_props) {
  return (
    <Stack justify="center" h="full">
      <ColorModeSwitch />
    </Stack>
  );
}
