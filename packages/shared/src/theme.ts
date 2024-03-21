import { extendTheme, ThemeOverride } from "@chakra-ui/react";

import { Switch } from "./theme/switch";
import { Select } from "./theme/select";

const overrides: ThemeOverride = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  colors: {
    red: {
      500: "#FF4F5B",
      600: "#FF3643",
      700: "#FF0214",
    },
    gray: {
      1000: "#0F0F0F",
    },
  },
  components: {
    Switch,
    Select,
  },
};

export const theme = extendTheme(overrides);
