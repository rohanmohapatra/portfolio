import { Center, Box, BoxProps } from "@chakra-ui/react";
import React from "react";

type DividerProps = BoxProps & {
  orientation: "horizontal" | "vertical";
};

export const Divider = ({ orientation, ...rest }: DividerProps) => {
  const size =
    orientation === "horizontal"
      ? { height: "0.15rem", width: "full" }
      : { width: "0.15rem", height: "full" };
  return (
    <Center flexGrow="1" height="full">
      <Box {...size} bg="red.500" {...rest} />
    </Center>
  );
};
