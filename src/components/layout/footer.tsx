'use client';

import { Stack, Heading } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Stack w="full" align="center" pb={['5rem', '2rem']} pr={['0rem', '10rem']}>
      <Heading code size="sm">
        Designed & Built by Rohan Mohapatra
      </Heading>
    </Stack>
  );
};
