import {
  defineStyleConfig,
  extendTheme,
  ThemeOverride,
  useColorMode as useChakraColorMode,
} from "@chakra-ui/react";

import { fonts } from "./lib/fonts";
import { Button } from "./theme/button";

import { theme as baseTheme } from "@portfolio/shared";

const Heading = defineStyleConfig({
  variants: {
    code: {
      fontFamily: fonts.notoSansMono.style.fontFamily,
      color: "red.500",
    },
  },
});

const overrides: ThemeOverride = {
  fonts: {
    heading: fonts.inter.style.fontFamily,
  },
  components: {
    Heading,
    Button,
  },
};

export const useBackgroundImage = () => {
  const { colorMode } = useChakraColorMode();

  if (colorMode === "dark") {
    // Onyx Black #0f0f0f
    return "linear-gradient(to bottom, rgba(15, 15, 15, 0.93) 10%,rgba(15, 15, 15, 0.98) 70%), url('/images/background.jpg');";
  }
  return "linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 10%,rgba(255, 255, 255, 1) 80%), url('/images/background.jpg');";
};

export const theme = extendTheme(overrides, baseTheme);