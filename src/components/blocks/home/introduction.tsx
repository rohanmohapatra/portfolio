'use client';
import { StackProps, HStack, Heading, Stack, Box } from '@chakra-ui/react';
import { motion } from 'motion/react';
import TypewriterComponent from 'typewriter-effect';
import { useColorModeValue } from '@/components/ui/color-mode';

const blobs = [
  {
    color: 'hsla(355,100%,50%,1)',
    size: '70vw',
    top: '-25vh',
    left: '40%',
    duration: 13,
    x: ['0%', '-40%', '10%', '0%'],
    y: ['0%', '-10%', '5%', '0%']
  },
  {
    color: 'hsla(355,100%,65%,1)',
    size: '60vw',
    top: '-15vh',
    left: '50%',
    duration: 17,
    x: ['0%', '20%', '-30%', '0%'],
    y: ['0%', '-15%', '0%', '0%']
  },
  {
    color: 'hsla(23,100%,83%,0.8)',
    size: '55vw',
    top: '-10vh',
    left: '45%',
    duration: 11,
    x: ['0%', '-25%', '15%', '0%'],
    y: ['0%', '-5%', '8%', '0%']
  },
  {
    color: 'hsla(355,100%,65%,1)',
    size: '50vw',
    top: '-20vh',
    left: '30%',
    duration: 19,
    x: ['0%', '30%', '-10%', '0%'],
    y: ['0%', '-12%', '5%', '0%']
  }
];

export const Introduction = (props: StackProps) => {
  return (
    <HStack
      w="full"
      h="100vh"
      backgroundColor="hsla(355,0%,5%,0)"
      position="relative"
      overflow="hidden"
      justify="flex-start"
      align="center"
      {...props}
    >
      <Box position="absolute" inset="0" pointerEvents="none" zIndex={0}>
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${b.color} 0%, transparent 60%)`,
              filter: 'blur(20px)',
              willChange: 'transform'
            }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </Box>
      <Stack w={['full', '70%']} h="full" justify="center" align={['center', 'flex-start']} position="relative" zIndex={1}>
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
