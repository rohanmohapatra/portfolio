import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  StackProps,
  Text
} from '@chakra-ui/react';

import { Divider } from '@/components/shared/divider';

export const About = (props: StackProps) => {
  return (
    <Stack h="full" w="full" gap="3rem" position="relative" {...props}>
      {/* <GradientBackground /> */}
      <HStack w={['full', '45%']} zIndex="2">
        <Heading code size="3xl">
          01.
        </Heading>
        <Heading size="3xl" mr="1rem">
          About me
        </Heading>
        <Divider orientation="horizontal" />
      </HStack>
      <Stack
        direction={['column-reverse', 'row']}
        gap={['1.5rem', '12rem']}
        align={['center', 'flex-start']}
        zIndex="2"
      >
        <Stack w={['full', '40%']} gap="1.5rem">
          <Text fontSize={['sm', 'lg']} textAlign="justify">
            I&apos;m a curious coder with a love for puzzles, patterns, and
            making things work better than they did five minutes ago. I get a
            weird amount of joy from solving tricky problems, building things
            that actually do stuff, and occasionally talking to my computer like
            it&apos;s a teammate. Whether it&apos;s organizing chaos or bringing
            ideas to life, I&apos;m always up for the next challenge — ideally
            with coffee in hand and a deep-house playlist in the background.
          </Text>
          <Text fontSize={['sm', 'lg']} textAlign="justify">
            When I&apos;m not elbow-deep in code, you&apos;ll find me spiraling
            down internet rabbit holes, dreaming up my own version of Iron
            Man&apos;s JARVIS—equal parts genius assistant and sarcastic
            sidekick. I tinker with AI ideas that might one day write my emails,
            debug my code, or at least remind me to eat lunch. I believe in
            clean code, clever hacks, and the power of a well-placed meme to
            survive those late-night “why isn&apos;t this working” moments.
          </Text>
        </Stack>
        <Box
          alignSelf={['center', 'flex-start']}
          backgroundColor="red.500"
          rounded="xl"
        >
          <Image
            src="/images/about.jpg"
            alt="About Rohan"
            h="30rem"
            rounded="xl"
            backgroundColor="red.500"
            opacity="0.6"
            transition="all 300ms linear"
            transitionProperty={['opacity', 'box-shadow']}
            _hover={{ opacity: 1, boxShadow: '20px 20px 0px 0px #FF4F5B' }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
