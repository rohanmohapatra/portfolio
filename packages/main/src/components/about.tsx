import {
  Box,
  BoxProps,
  HStack,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';

import { Divider } from './shared/divider';

export const About = (props: BoxProps) => {
  return (
    <Stack h="full" w="full" spacing="3rem" {...props}>
      <HStack w="45%">
        <Heading variant="code" size="lg">
          01.
        </Heading>
        <Heading size="lg" mr="1rem">
          About me
        </Heading>
        <Divider orientation="horizontal" />
      </HStack>
      <HStack spacing="12rem" align="flex-start">
        <Stack w="40%">
          <Text fontSize="lg" textAlign="justify">
            I am a passionate software developer with a relentless curiosity for
            understanding and solving complex problems. My journey in the tech
            world has been marked by a deep dive into the realms of Machine
            Learning, where I have crafted algorithms to optimize real-world
            systems. My expertise extends to the seamless orchestration of
            applications using Kubernetes, the development of robust Spring Boot
            microservices, and the creation of engaging React JS applications.
          </Text>
          <Text fontSize="lg" textAlign="justify">
            My project portfolio reflects my commitment to innovation.
            Noteworthy projects include a Distributed In-Memory Hash Table
            leveraging Apache Zookeeper, Apache Kafka, and Java, showcasing a
            significant reduction in data retrieval latency and an increase in
            system throughput against Redis. The creation of a Virtual Events
            Platform, utilizing React.js, Material UI, Cassandra, and Node.js,
            demonstrated my ability to enhance user experience and streamline
            event management. Moreover, the development of a Container
            Orchestration Engine on AWS, Docker, Flask, and SQLite showcased my
            skills in ensuring high availability, fault tolerance, scalability,
            and a smooth user experience.
          </Text>
        </Stack>
        <Box alignSelf="flex-start" backgroundColor="red.500" rounded="xl">
          <Image
            src="/images/about.jpg"
            alt="About Rohan"
            h="20rem"
            rounded="xl"
            backgroundColor="red.500"
            opacity="0.6"
            transition="all 300ms linear"
            transitionProperty={['opacity', 'box-shadow']}
            _hover={{ opacity: 1, boxShadow: '20px 20px 0px 0px #FF4F5B' }}
          />
        </Box>
      </HStack>
    </Stack>
  );
};
