import React from 'react';
import { Stack, HStack } from '@chakra-ui/react';
import { IconBar } from './layout/IconBar';
import { Portfolio } from './portfolio/Portfolio';

export const Layout: React.FC = () => {
  return (
    <Stack
      pl={{ base: '1rem', md: '5rem' }}
      boxSize="full"
      backgroundImage="
      linear-gradient(to bottom, rgba(255,255,255,1) 30%,rgba(255,255,255,0.9) 100%), 
      url('/images/background.jpg');"
    >
      <HStack boxSize="full">
        <IconBar position="fixed" top="40%" />
        <Portfolio />
      </HStack>
    </Stack>
  );
};
