import { Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

export const TopBar: React.FC = () => (
  <Box position="fixed" w="full" mt="2rem">
    <HStack justify="space-between" mx="5rem">
      <Heading fontSize="lg">Rohan</Heading>
      <HStack spacing="4rem">
        <Heading fontSize="lg">Home</Heading>
        <Heading fontSize="lg">About</Heading>
        <Heading fontSize="lg">Publications</Heading>
        <Heading fontSize="lg">Skills</Heading>
        <Heading fontSize="lg">Projects</Heading>
        <Heading fontSize="lg">Blog</Heading>
        <Heading fontSize="lg">Contact Me</Heading>
      </HStack>
    </HStack>
  </Box>
);
