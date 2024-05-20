import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { IconBar } from '@portfolio/shared';
import { useBackgroundImage } from '../theme';

import { Navbar } from './layout/navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const backgroundImage = useBackgroundImage();
  const router = useRouter();
  const showIconbar = !(router.pathname === '/resume');
  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundPosition="center"
      backgroundAttachment="fixed"
      backgroundSize="cover"
    >
      {showIconbar && <IconBar position="fixed" top="40%" left="2%" />}
      <Navbar />
      {children}
    </Box>
  );
};
