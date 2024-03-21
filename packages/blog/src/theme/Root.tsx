import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { extendTheme } from "@chakra-ui/react";
import { IconBar, theme as baseTheme } from "@portfolio/shared";
import "@fontsource/noto-sans-mono";
import "@fontsource/inter";

const theme = extendTheme(
  {
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
  },
  baseTheme
);

// Default implementation, that you can customize
const Root = ({ children }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <IconBar position="fixed" top="50%" left="2%" />
      {children}
    </ChakraProvider>
  );
};

export default Root;
