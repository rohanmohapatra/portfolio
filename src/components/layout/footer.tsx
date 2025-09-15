'use client';

import { Stack, Heading } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Stack w="full" align="center" pb={{ base: '10rem', md: '2rem' }} position="fixed" bottom="0">
      <Heading code size="sm">
        Designed & Built by Rohan Mohapatra
      </Heading>
    </Stack>
  );
};
