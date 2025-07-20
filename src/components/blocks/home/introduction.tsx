'use client';
import { StackProps, HStack, Heading, Stack } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import { useColorModeValue } from '@/components/ui/color-mode';

export const Introduction = (props: StackProps) => {
  return (
    <HStack
      w="full"
      h="100vh"
      backgroundColor="hsla(355,0%,5%,0)"
      backgroundImage="radial-gradient(at 100% 0%, hsla(355,100%,50%,1) 0px, transparent 50%),
      radial-gradient(at 100% 44%, hsla(355,100%,65%,1) 0px, transparent 50%),
      radial-gradient(at 100% 57%, hsla(23,100%,83%,0.8) 0px, transparent 50%),
      radial-gradient(at 55% 0%, hsla(355,100%,65%,1) 0px, transparent 50%);"
      justify="flex-start"
      align="center"
      {...props}
    >
      <Stack w={['full', '70%']} h="full" justify="center" align={['center', 'flex-start']}>
        <Heading textStyle="xl" code fontWeight="bold">
          Hi, my name is
        </Heading>
        <Heading textStyle={['xl', '7xl']} fontWeight="bold" mt="-0.5rem">
          Rohan Mohapatra
        </Heading>
        <Stack gap="0rem" mt="-0.75rem">
          <Heading size={['md', '2xl']} color={useColorModeValue('gray.600', 'gray.400')}>
            I build software that works for humans (not just machines),
          </Heading>
          <Stack direction={['column', 'row']} mt="-0.5rem">
            <Heading size={['md', '2xl']} color={useColorModeValue('gray.600', 'gray.400')}>
              with
            </Heading>
            <Heading size={['md', '2xl']} color="red.500">
              <TypewriterComponent
                options={{
                  strings: ['Machine Learning', 'Generative AI', 'Distributed Systems', 'React JS'],
                  autoStart: true,
                  loop: true
                }}
                component="span"
              />
            </Heading>
            <Heading size={['md', '2xl']} color={useColorModeValue('gray.600', 'gray.400')}>
              and a Keyboard.
            </Heading>
          </Stack>
        </Stack>
      </Stack>
    </HStack>
  );
};
