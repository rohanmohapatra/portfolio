'use client';
import { Icon, Switch } from '@chakra-ui/react';
import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react';
import { useColorMode } from '@/components/ui/color-mode';

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch.Root
      size="lg"
      checked={colorMode === 'dark'}
      onCheckedChange={toggleColorMode}
      transition="background 200ms linear"
      colorPalette="red"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator
          fallback={
            <Icon asChild color="zinc.800">
              <MoonStarsIcon weight="duotone" />
            </Icon>
          }
        >
          <Icon asChild color="white">
            <SunIcon weight="duotone" />
          </Icon>
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};
