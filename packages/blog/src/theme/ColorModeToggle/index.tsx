import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import { ColorModeSwitch } from "@portfolio/shared";
import { Stack } from "@chakra-ui/react";

export default function ColorModeToggleWrapper(props) {
  return (
    <Stack justify="center" h="full">
      <ColorModeSwitch />
    </Stack>
  );
}
