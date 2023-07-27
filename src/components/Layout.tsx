import { HStack, Stack } from '@chakra-ui/react';
import React from 'react';

import { IconBar } from './layout/IconBar';
import { Portfolio } from './portfolio/Portfolio';
import { useBackgroundImage } from './Theme';

export const Layout: React.FC = () => {
  const backgroundImage = useBackgroundImage();

  return (
    <Stack
      pl={{ base: '0rem', md: '5rem' }}
      boxSize="full"
      backgroundImage={backgroundImage}
    >
      <HStack boxSize="full">
        <IconBar position="fixed" top="28%" />
        <Portfolio />
      </HStack>
    </Stack>
  );
};
