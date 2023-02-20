import React from 'react';
import {
  Image,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  BoxProps,
} from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

export const Intro: React.FC<BoxProps> = (props) => {
  return (
    <Stack
      direction={{ base: 'column-reverse', md: 'row' }}
      alignItems="center"
      justify="center"
      spacing={{ base: '2rem', md: '10rem' }}
      h="100vh"
      pl={{ base: '1rem', md: '0rem' }}
      {...props}
    >
      <Stack spacing="1rem" h={{ base: '20rem', md: '50rem' }} justify="center">
        <Heading>Hi, I am Rohan</Heading>
        <Heading fontSize="2xl" color="gray.500">
          Software Developer
        </Heading>
        <Text color="gray.500">
          Algorithms • Machine learning • Microservices • React JS
        </Text>
        <ScrollIntoView selector="#projects">
          <Button
            maxW="md"
            bg="red.500"
            mt="6rem !important"
            rightIcon={<Icon as={FaRocket} />}
          >
            Projects
          </Button>
        </ScrollIntoView>
      </Stack>
      <Image src="/images/profile.svg" h={{ base: '20rem', md: '30rem' }} />
    </Stack>
  );
};
