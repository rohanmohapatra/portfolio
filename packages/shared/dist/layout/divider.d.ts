import { BoxProps } from "@chakra-ui/react";
import React from "react";
type DividerProps = BoxProps & {
    orientation: "horizontal" | "vertical";
};
export declare const Divider: ({ orientation, ...rest }: DividerProps) => React.JSX.Element;
export {};
