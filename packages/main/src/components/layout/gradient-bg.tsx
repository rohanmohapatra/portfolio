import { Box, Stack } from '@chakra-ui/react';

export const GradientBackground = () => {
  return (
    <Stack
      position="absolute"
      inset="0"
      justify="center"
      zIndex="1"
      spacing="0"
      height="full"
      top="1rem"
      left="30rem"
      transform="auto"
      rotate="-45deg"
    >
      <Box
        bg="red.500"
        opacity="0.6"
        boxSize="40rem"
        borderRadius="full"
        filter="auto"
        blur="60px"
      />
      <Box
        bg="red.600"
        opacity="0.2"
        boxSize="30rem"
        borderRadius="full"
        filter="auto"
        blur="60px"
        marginTop="-12rem"
      />
    </Stack>
  );
};
