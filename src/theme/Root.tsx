import { ChakraProvider } from '@chakra-ui/react';
import { useLocation } from '@docusaurus/router';
import React from 'react';

import { theme } from '../components/Theme';

// Default implementation, that you can customize
export default function Root({ children }) {
  const location = useLocation();
  //   if (location.pathname.includes('blog')) {
  //     return <>{children}</>;
  //   }
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  );
}
