import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import '@fontsource/noto-sans-mono';

export default function LayoutWrapper(props) {
  return (
    <Stack w="full" align="center" pt="2rem" pl="1rem">
      <Heading
        fontFamily="Noto Sans Mono"
        fontWeight="700"
        color="var(--ifm-color-primary)"
        size="sm"
      >
        {props.copyright}
      </Heading>
    </Stack>
  );
}
