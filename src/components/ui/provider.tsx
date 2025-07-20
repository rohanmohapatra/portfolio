'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { system } from '@/lib/theme';

export function Provider(props: ColorModeProviderProps) {
  /**
   * Fixed by following this guide
   * https://stackoverflow.com/a/79279883/11309609
   */
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
