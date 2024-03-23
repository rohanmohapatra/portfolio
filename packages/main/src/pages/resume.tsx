import {
  Box,
  Button,
  Stack,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  Avatar,
  HStack,
  Text,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';
import { PiPrinterBold } from 'react-icons/pi';
import Head from 'next/head';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const Title = ({ title, date }: { title: string; date: string }) => {
  return (
    <HStack w="full" justify="space-between">
      <Heading size="md" color={useColorModeValue('gray.1000', 'white')}>
        {title}
      </Heading>
      <Heading size="sm" color={useColorModeValue('gray.1000', 'white')}>
        {date}
      </Heading>
    </HStack>
  );
};

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

const Information = (props: { printRef: any }) => {
  return (
    <Stack width={['full', '50rem']} bg="red.500" color="white">
      <Stack
        bg="rgba(0, 0, 0, 0.3)"
        p="2rem"
        pt="6rem"
        justify="center"
        alignItems="center"
        textAlign="center"
      >
        <Avatar
          boxSize="14rem"
          name="Rohan Mohapatra"
          bg="red.500"
          color="white"
          src="/images/about.jpg"
        />
        <Heading>Rohan Mohapatra</Heading>
        <Text color="whiteAlpha.900">
          M.S. Computer Science @ San Jose State University
        </Text>
        <Text color="whiteAlpha.900">Research Scientist @ MICoSys Lab</Text>

        <ReactToPrint
          bodyClass="print-agreement"
          content={() => props.printRef.current}
          trigger={() => (
            <Box>
              <Button
                variant="outline"
                fontSize="sm"
                leftIcon={<Icon as={PiPrinterBold} />}
                color="white"
                borderColor="white"
                px="0.5rem"
              >
                Print
              </Button>
            </Box>
          )}
        />
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
            <Text key={language}>{language}</Text>
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
          'MySQL'
        ].map((db) => (
          <Text key={db}> {db}</Text>
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
          'LaTeX'
        ].map((db) => (
          <Text key={db}>{db}</Text>
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

const Awards = () => {
  const headingColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.800');
  return (
    <Stack spacing="2">
      <Stack spacing="0.5">
        <Title title="Bravo Award from GoTo Inc." date="2022" />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>
      <Stack spacing="0.5">
        <Title
          title="Professor CNR Rao Merit Scholarship at PES University"
          date="2016-2020"
        />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>

      <Stack spacing="0.5">
        <Title
          title="Professor M R Doreswamy Merit Scholarship at PES University"
          date="2016-2020"
        />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>

      <Stack spacing="0.5">
        <Title
          title="Distinction Award for all semesters at PES University"
          date="2016-2020"
        />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>
    </Stack>
  );
};

const OnlineResume = () => {
  const headingColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.800');
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Head>
        <title>Rohan Mohapatra | Résumé</title>
      </Head>
      <Stack direction={['column', 'row']} ref={ref} id="print-info">
        <Information printRef={ref} />
        <Stack
          p="2rem"
          pt="5rem"
          pr="8rem"
          bg={useColorModeValue('white', 'gray.1000')}
          id="print-info-content"
        >
          <Heading size="lg" textTransform="uppercase" pt="2rem">
            Education
          </Heading>
          <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
          <Stack spacing="0.5">
            <Title title="M.S. Computer Science" date="August 2022 - Present" />
            <Heading size="sm" color={headingColor}>
              San Jose State University | San Jose, California
            </Heading>
            <UnorderedList pl="3rem">
              <ListItem>GPA: 3.83 / 4</ListItem>
              <ListItem>Courses:</ListItem>
              <UnorderedList>
                <ListItem>CS XX</ListItem>
              </UnorderedList>
            </UnorderedList>
          </Stack>
          <Stack spacing="0.5">
            <Title
              title="B.Tech. Computer Science and Engineering"
              date="August 2016 - May 2020"
            />
            <Heading size="sm" color={headingColor}>
              PES University | Bengaluru, India
            </Heading>
            <UnorderedList pl="3rem">
              <ListItem>GPA: 3.9 / 4</ListItem>
              <ListItem>
                Specialization: Algorithms and Computing Models
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack>
            <Heading size="lg" textTransform="uppercase" pt="2rem">
              Professional Experience
            </Heading>
            <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
            <Stack spacing="0.5">
              <Title
                title="Research Scientist "
                date="September 2022 - Present"
              />
              <Heading size="sm" color={headingColor}>
                MICoSys Lab, San Jose State University | San Jose, CA
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Analyzed 100GB of hard disk failure data and performed ETL
                  from multiple data sources to store on PostgreSQL.
                </ListItem>
                <ListItem>
                  Designed a Transformer based Deep Learning Model to predict
                  end-of-life of Hard disks and Li-ion batteries; increasing
                  model performance by 74% from the state-of-the art models.
                </ListItem>
                <ListItem>
                  Published 3 research papers at renowned conferences and
                  journals
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing="0.5">
              <Title
                title="Software Engineer - II"
                date="October 2021 - August 2022"
              />
              <Heading size="sm" color={headingColor}>
                GoTo Inc. | Bengaluru, India
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Architected and engineered a platform on React, Typescript,
                  and Electron housing all products of GoTo under one
                  application; collaborated with engineers from 3 sites to
                  increase performance of the platform by 80%.
                </ListItem>
                <ListItem>
                  Led a team of 3 engineers and implemented multiple Java
                  Spring-boot APIs for conference creation and lifecycle
                  management and developed JavaScript and NodeJS-based Miro
                  add-on for GoTo Training to enhance customer retention by
                  ~29%.
                </ListItem>
                <ListItem>
                  Analyzed Splunk logs to diagnose issues in first response
                  on-call team and created RCA and reports for P1, P2 and P3
                  incidents; awarded Bravo Award for delivering high-quality
                  products.
                </ListItem>
              </UnorderedList>
            </Stack>

            <Stack spacing="0.5">
              <Title
                title="Software Engineer - I"
                date="August 2020 - September 2021"
              />
              <Heading size="sm" color={headingColor}>
                GoTo Inc. | Bengaluru, India
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Engineered Breakout Rooms built with React, NodeJS, and Java
                  boosting customer satisfaction by ~40%.
                </ListItem>
                <ListItem>
                  Redesigned the event generation and consumption mechanism on
                  Spring 3.x services using Kafka for 5 times faster join to
                  conferences.
                </ListItem>
                <ListItem>
                  Promoted after a year to Software Engineer (Level-2), fastest
                  across the company.
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>

          <Stack>
            <Heading size="lg" textTransform="uppercase" pt="2rem">
              Internship Experience
            </Heading>
            <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
            <Stack spacing="0.5">
              <Title
                title="Machine Learning Intern"
                date="June 2023 - August 2023"
              />
              <Heading size="sm" color={headingColor}>
                Spicyfy Ventures LLC | Irving, TX (Remote)
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Engineered a video sentiment analyzing & generative video
                  composing service using Tensorflow and Deep learning
                  increasing product sales by 45% in Q3 2023.
                </ListItem>
                <ListItem>
                  Built a distributed system using Raft and Python to deploy ML
                  services that cut service downtime by 91%.
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing="0.5">
              <Title
                title="Software Engineering Intern"
                date="January 2020 - July 2020"
              />
              <Heading size="sm" color={headingColor}>
                LogMeIn, Inc. | Bengaluru, India
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Worked alongside senior employees to develop micro-service
                  deployment framework for Java, Python and NodeJS based
                  services on Kubernetes (EKS) to deploy services in less than 1
                  minute.
                </ListItem>
                <ListItem>
                  Automated multi-service monitoring by creating alerts and
                  graphs using Jsonnet; increasing uptime of micro-services to
                  99.99%.
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing="0.5">
              <Title
                title="Machine Learning Intern"
                date="June 2019 - August 2019"
              />
              <Heading size="sm" color={headingColor}>
                Itron India Private Limited | Bengaluru, India
              </Heading>
              <UnorderedList pl="3rem">
                <ListItem>
                  Built a time and memory efficient HDBSCAN library in C++ to
                  cluster usage statistics from real-time data received from
                  electric meters; saving the company $20K+ quarterly on
                  maintenance
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>

          <Heading size="lg" textTransform="uppercase" pt="2rem">
            Projects
          </Heading>
          <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
          <Heading size="lg" textTransform="uppercase" pt="2rem">
            Awards
          </Heading>
          <Divider bg="red.500" w="40rem" opacity="1" height="0.2rem" />
          <Awards />
        </Stack>
      </Stack>
    </>
  );
};

export default OnlineResume;
