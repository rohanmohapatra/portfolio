import React from 'react';
import {
  Avatar,
  Heading,
  HStack,
  Stack,
  Divider,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Layout from '@theme/Layout';
import {
  FaEnvelope,
  FaGithub,
  FaGlobeAmericas,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa';

const ContactInformation = (props: {
  type: 'email' | 'linkedin' | 'number' | 'website' | 'github';
  value: string;
}) => {
  const { type, value } = props;
  const getIcon = () => {
    switch (type) {
      case 'email':
        return <FaEnvelope />;
      case 'number':
        return <FaPhone />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'website':
        return <FaGlobeAmericas />;
      case 'github':
        return <FaGithub />;

      default:
        break;
    }
  };
  return (
    <HStack>
      {getIcon()}
      <Text>{value}</Text>
    </HStack>
  );
};

const Information = () => {
  return (
    <Stack width={['full', '40rem']} bg="red.500" color="white">
      <Stack
        bg="rgba(0, 0, 0, 0.3)"
        p="2rem"
        justify="center"
        alignItems="center"
      >
        <Avatar
          boxSize="14rem"
          name="Rohan Mohapatra"
          bg="red.500"
          color="white"
          src="/images/resume_potrait.png"
        />
        <Heading>Rohan Mohapatra</Heading>
        <Text color="whiteAlpha.900">
          M.S. Computer Science @ San Jose State University
        </Text>
        <Text color="whiteAlpha.900">Research Scientist @ MICoSys Lab</Text>
      </Stack>
      <Stack p="2rem">
        <ContactInformation type="email" value="rohan.mohapatra@sjsu.edu" />
        <ContactInformation type="number" value="+1 (***) ***-9018" />
        <ContactInformation type="website" value="rohanmohapatra.github.io" />
        <ContactInformation type="linkedin" value="rohan-mohapatra" />
        <ContactInformation type="github" value="rohanmohapatra" />
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Programming Languages
        </Heading>
        {['Java', 'Typescript', 'Python', 'C++', 'C', 'Javascript'].map(
          (language) => (
            <Text>{language}</Text>
          )
        )}
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Databases
        </Heading>
        {[
          'Mongo DB',
          'Cassandra',
          'Amazon Dynamo DB',
          'Neo4j Graph DB',
          'PostgreSQL',
          'Oracle',
          'MySQL',
        ].map((db) => (
          <Text>{db}</Text>
        ))}
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Libraries
        </Heading>
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Tools/Technologies
        </Heading>
        {[
          'Linux',
          'Git',
          'Kafka',
          'Docker',
          'Kubernetes',
          'React.js',
          'Hadoop / Hive',
          'LaTeX',
        ].map((db) => (
          <Text>{db}</Text>
        ))}
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Languages
        </Heading>
        <Text as="span">
          English{' '}
          <Text as="span" color="whiteAlpha.600">
            (Native)
          </Text>
        </Text>
        <Text as="span">
          Hindi{' '}
          <Text as="span" color="whiteAlpha.600">
            (Native)
          </Text>
        </Text>
        <Text as="span">
          German{' '}
          <Text as="span" color="whiteAlpha.600">
            (Beginner)
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

const OnlineResume = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Information />
      <Stack p="2rem">
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Education
        </Heading>
        <Divider bg="red.500" opacity="1" height="0.2rem" />
        <Stack spacing="0.5">
          <Heading size="md">M.S. Computer Science</Heading>
          <Heading size="sm" color="blackAlpha.600">
            August 2022 - May 2024
          </Heading>
          <Heading size="sm" color="blackAlpha.600">
            San Jose State University | San Jose, California
          </Heading>
          <UnorderedList pl="3rem">
            <ListItem>GPA: 3.95 / 4</ListItem>
            <ListItem>Courses:</ListItem>
            <UnorderedList>
              <ListItem>CS XX</ListItem>
            </UnorderedList>
          </UnorderedList>
        </Stack>
        <Stack spacing="0.5">
          <Heading size="md">B.Tech. Computer Science and Engineering</Heading>
          <Heading size="sm" color="blackAlpha.600">
            August 2016 - May 2020
          </Heading>
          <Heading size="sm" color="blackAlpha.600">
            PES University | Bengaluru, India
          </Heading>
          <UnorderedList pl="3rem">
            <ListItem>GPA: 3.9 / 4</ListItem>
            <ListItem>Specialization: Algorithms and Computing Models</ListItem>
          </UnorderedList>
        </Stack>
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Professional Experience
        </Heading>
        <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Internship Experience
        </Heading>
        <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Projects
        </Heading>
        <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Awards
        </Heading>
        <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
      </Stack>
    </Stack>
  );
};

const OnlineResumeWrapper = () => {
  return (
    <Layout title="Rohan Mohapatra | Online Résumé">
      <OnlineResume />
    </Layout>
  );
};

export default OnlineResumeWrapper;
