import React from 'react';
import { HStack, Text, Switch, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justify="center" align="center">
      <Text>Light</Text>
      <Switch
        size="md"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        transition="background 200ms linear"
      />
      <Text>Dark</Text>
    </HStack>
  );
};
