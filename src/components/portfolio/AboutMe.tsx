import React from 'react';
import {
  BoxProps,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { openUrl } from '../../utils/helpers';

export const AboutMe: React.FC<BoxProps> = (props) => {
  return (
    <Stack justify="center" alignItems="center" {...props}>
      <Heading fontSize="2xl">About Me</Heading>
      <Text color="gray.800">My Introduction</Text>
      <Stack direction={{ base: 'column', md: 'row' }} pt="3rem">
        <Image src="/images/about-me.svg" h="30rem" />
        <Stack
          width={{ base: 'full', md: '45%' }}
          spacing={{ base: '1rem', md: '4rem' }}
          pl={{ base: '1rem', md: '4rem' }}
        >
          <Text color="gray.800" fontSize="xl">
            Software developer with a thirst to understand complex problems and
            come up with innovative solutions. Experience in Machine Learning,
            worked on algorithms to optimize real-world systems. Good knowledge
            on Kubernetes, Springboot microservices and React JS applications.
          </Text>
          <HStack alignItems="center" justify="center">
            <Stat>
              <StatNumber>2+</StatNumber>
              <StatHelpText>Years of Experience</StatHelpText>
            </Stat>
            <Stat>
              <StatNumber>10+</StatNumber>
              <StatHelpText>Projects</StatHelpText>
            </Stat>
            <Stat>
              <StatNumber>2</StatNumber>
              <StatHelpText>Publications</StatHelpText>
            </Stat>
          </HStack>
          <Button
            maxW="md"
            bg="red.500"
            mt={{ base: '', md: '4rem !important' }}
            rightIcon={<Icon as={FaDownload} />}
            onClick={() => openUrl('/resume')}
          >
            View Résumé
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
