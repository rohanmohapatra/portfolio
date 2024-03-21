export declare const Select: {
    baseStyle?: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
        keys: ("icon" | "field")[];
    }> | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("icon" | "field")[];
        }>;
    } | undefined;
    variants?: {
        flushed: {
            field: {
                borderBottom: string;
                borderColor: string;
                textAlign: string;
                fontFamily: string;
                fontWeight: number;
                _focus: {
                    borderColor: string;
                    boxShadow: string;
                };
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "flushed" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("icon" | "field")[];
};
