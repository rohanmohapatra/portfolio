import {
  BoxProps,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const Publications: React.FC<BoxProps> = (props) => (
  <Stack
    justify="center"
    alignItems="center"
    h="100%"
    w="full"
    pb="5rem"
    {...props}
  >
    <Heading fontSize="2xl">Publications</Heading>
    <Stack
      direction={['column', 'row']}
      w="full"
      justify="center"
      align="center"
      color="white"
    >
      <Button
        as={Stack}
        maxW={{ base: '90%', md: 'full' }}
        h="15rem"
        alignItems="flex-start"
        p="2rem"
        cursor="pointer"
        onClick={() =>
          window.open(
            'https://link.springer.com/chapter/10.1007%2F978-981-15-5243-4_5'
          )
        }
      >
        <Image src="/images/springerlink.svg" h="3rem" />
        <Stack whiteSpace="normal" w={{ base: 'full', md: '30rem' }}>
          <Text fontSize="lg" wordBreak="break-word">
            A New Approach for Momentum Particle Swarm Optimization
          </Text>
          <Text fontSize="md" fontWeight="normal" wordBreak="break-word">
            Advances in Machine Learning and Computational Intelligence
          </Text>
        </Stack>
      </Button>
      <Button
        as={Stack}
        maxW={{ base: '90%', md: 'full' }}
        h="15rem"
        alignItems="flex-start"
        p="2rem"
        cursor="pointer"
        onClick={() =>
          window.open('https://ieeexplore.ieee.org/document/9472873')
        }
      >
        <Image src="/images/ieee_logo_white.png" h="3rem" />
        <Stack whiteSpace="normal" w={{ base: 'full', md: '30rem' }}>
          <Text fontSize="lg" wordBreak="break-word">
            AdaSwarm: Augmenting Gradient-Based Optimizers in Deep Learning With
            Swarm Intelligence
          </Text>
          <Text fontSize="md" fontWeight="normal" wordBreak="break-word">
            IEEE Transactions on Emerging Topics in Computational Intelligence
          </Text>
        </Stack>
      </Button>
    </Stack>
  </Stack>
);
