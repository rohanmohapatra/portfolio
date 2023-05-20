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
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

import { openUrl } from '../../utils/helpers';

export const AboutMe: React.FC<BoxProps> = (props) => {
  const text = useColorModeValue('gray.800', 'gray.100');
  const image = useColorModeValue(
    '/images/about-me.svg',
    '/images/about-me-dark.svg'
  );
  return (
    <Stack
      justify="center"
      alignItems="center"
      pr={{ base: '1.5rem', md: '0rem' }}
      {...props}
    >
      <Heading fontSize="2xl">About Me</Heading>
      <Text color={text}>My Introduction</Text>
      <Stack direction={{ base: 'column', md: 'row' }} pt="3rem">
        <Image src={image} h="30rem" />
        <Stack
          width={{ base: 'full', md: '45%' }}
          spacing={{ base: '1rem', md: '4rem' }}
          pl={{ base: '1rem', md: '4rem' }}
        >
          <Text color={text} fontSize="xl">
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
