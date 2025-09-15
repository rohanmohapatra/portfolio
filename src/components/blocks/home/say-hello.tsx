'use client';
import { Stack, HStack, Heading, Button, Text, StackProps } from '@chakra-ui/react';
import { useRef } from 'react';

import { HandWavingIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { GoBackInTimeDialog } from '@/components/blocks/home/go-back-in-time-dialog';
import { openUrl } from '@/lib/utils';

export const SayHello = (props: StackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Stack h="full" w="full" gap="5rem" pr={['0rem', '9rem']} {...props}>
      <Stack w="full" align="center" ref={containerRef}>
        <motion.div
          initial={{ width: '30%' }}
          whileInView={{ width: '60%' }}
          exit={{ width: '30%' }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
        >
          <HStack w="full" bg="red.500" p="1rem" rounded="md" justify="center">
            <Heading code color={{ base: 'white', _dark: 'zinc.950' }} size="3xl">
              04.
            </Heading>
            <Heading size="3xl" mr="1rem">
              {`What's next?`}
            </Heading>
          </HStack>
        </motion.div>
      </Stack>

      <Stack align="center" w="full" gap="2rem">
        <Text w="24rem" textAlign="center" fontSize="1.1em">
          Whether you have a question or just want to say hi, {`I'll`} try my best to get back to you!
        </Text>
        <HStack>
          <Button variant="outline" onClick={() => openUrl('mailto:rohannmohapatra@gmail.com')} size={['sm', 'lg']}>
            Say Hello! <HandWavingIcon weight="duotone" fontSize="1.2rem" />
          </Button>
          <GoBackInTimeDialog />
        </HStack>
      </Stack>
    </Stack>
  );
};
