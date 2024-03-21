import {
  Stack,
  HStack,
  Heading,
  Button,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { PiHandWavingBold } from 'react-icons/pi';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { openUrl } from '../lib/utils';

import { AnimatedBox } from './animated/animated-box';

export const SayHello = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], ['60%', '0%'], {
    clamp: true
  });

  return (
    <Stack h="full" w="full" spacing="5rem" pr="9rem">
      <HStack w="full" justify="center" ref={containerRef}>
        <Heading variant="code" size="lg">
          04.
        </Heading>
        <Heading size="lg" mr="1rem">
          {`What's next?`}
        </Heading>
      </HStack>
      <Stack align="center" w="full" spacing="2rem">
        <AnimatedBox style={{ width: rotate }} bg="red.500" p="1rem">
          <Heading
            variant="code"
            color={useColorModeValue('white', 'gray.1000')}
            textAlign="center"
          >
            Get In Touch
          </Heading>
        </AnimatedBox>

        <Text w="20rem" textAlign="center" fontSize="1.1em">
          Whether you have a question or just want to say hi, {`I'll`} try my
          best to get back to you!
        </Text>
        <Button
          variant="outline"
          rightIcon={<PiHandWavingBold fontSize="1.5rem" />}
          onClick={() => openUrl('mailto:rohannmohapatra@gmail.com')}
        >
          Say hello!
        </Button>
      </Stack>
    </Stack>
  );
};
