import {
  Stack,
  HStack,
  Heading,
  Button,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import {
  PiClockCounterClockwiseBold,
  PiHandWavingDuotone
} from 'react-icons/pi';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { openUrl } from '../lib/utils';

import { AnimatedBox } from './animated/animated-box';
import { GoBackInTimeModal } from './go-back-in-time-modal';

export const SayHello = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], ['60%', '0%'], {
    clamp: true
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <HStack>
          <Button
            variant="outline"
            rightIcon={<PiHandWavingDuotone fontSize="1.5rem" />}
            onClick={() => openUrl('mailto:rohannmohapatra@gmail.com')}
          >
            Say hello!
          </Button>
          <Button
            variant="outline"
            bg="red.500"
            color={useColorModeValue('white', 'gray.1000')}
            rightIcon={<PiClockCounterClockwiseBold fontSize="1.5rem" />}
            onClick={onOpen}
          >
            Go back in time
          </Button>
          <GoBackInTimeModal isOpen={isOpen} onClose={onClose} />
        </HStack>
      </Stack>
    </Stack>
  );
};
