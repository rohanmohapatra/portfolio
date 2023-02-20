import React from 'react';
import { Stack, HStack } from '@chakra-ui/react';
import { IconBar } from './layout/IconBar';
import { Portfolio } from './portfolio/Portfolio';
import { useBackgroundImage } from './Theme';

export const Layout: React.FC = () => {
  const backgroundImage = useBackgroundImage();

  return (
    <Stack
      pl={{ base: '1rem', md: '5rem' }}
      boxSize="full"
      backgroundImage={backgroundImage}
    >
      <HStack boxSize="full">
        <IconBar position="fixed" top="35%" />
        <Portfolio />
      </HStack>
    </Stack>
  );
};
