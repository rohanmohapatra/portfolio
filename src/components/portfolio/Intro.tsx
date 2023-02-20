import React from 'react';
import {
  Image,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  BoxProps,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRocket, FaUserAstronaut } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

export const Intro: React.FC<BoxProps> = (props) => {
  const heading = useColorModeValue('gray.800', 'gray.200');
  const text = useColorModeValue('gray.500', 'gray.300');

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
      <Stack h={{ base: '20rem', md: '50rem' }} justify="center">
        <Heading>Hi, I am Rohan!</Heading>
        <Heading fontSize="2xl" color="red.500" pt="2rem">
          A Software Developer.
        </Heading>
        <Heading fontSize="lg" color={heading}>
          Building software for humans
        </Heading>
        <Text color={text} pt="2rem">
          Algorithms • Machine learning • Microservices • React JS
        </Text>
        <HStack mt="4rem !important">
          <ScrollIntoView selector="#about">
            <Button
              maxW="md"
              bg="red.500"
              rightIcon={<Icon as={FaUserAstronaut} />}
            >
              About me
            </Button>
          </ScrollIntoView>
          <ScrollIntoView selector="#projects">
            <Button maxW="md" bg="red.500" rightIcon={<Icon as={FaRocket} />}>
              Projects
            </Button>
          </ScrollIntoView>
        </HStack>
      </Stack>
      <Image src="/images/profile.svg" h={{ base: '20rem', md: '30rem' }} />
    </Stack>
  );
};
