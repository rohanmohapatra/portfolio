import React from "react";
import { Stack, HStack } from "@chakra-ui/react";
import { IconBar } from "./layout/IconBar";
import { Portfolio } from "./portfolio/Portfolio";

export const Layout: React.FC = () => {
  return (
    <Stack pl={{ base: "1rem", md: "5rem" }} boxSize="full">
      <HStack boxSize="full">
        <IconBar position="fixed" top="40%" />
        <Portfolio />
      </HStack>
    </Stack>
  );
};
