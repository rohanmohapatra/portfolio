import {
  BoxProps,
  HStack,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';

export const Introduction = (props: BoxProps) => {
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
      <Stack w="70%" h="full" justify="center">
        <Heading size="md" variant="code">
          Hi, my name is
        </Heading>
        <Heading size="3xl">Rohan Mohapatra.</Heading>
        <Stack spacing="-2rem">
          <Heading size="xl" color={useColorModeValue('gray.600', 'gray.400')}>
            I build software for humans,
          </Heading>
          <HStack>
            <Heading
              size="xl"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              focusing on
            </Heading>
            <Heading size="xl" color="red.500">
              <TypewriterComponent
                options={{
                  strings: [
                    'Machine Learning',
                    'Generative AI',
                    'Distributed Systems',
                    'React JS'
                  ],
                  autoStart: true,
                  loop: true
                }}
                component="span"
              />
              .
            </Heading>
          </HStack>
        </Stack>
      </Stack>
    </HStack>
  );
};
