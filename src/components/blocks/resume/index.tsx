'use client';
import { Button, Stack, Heading, List, Avatar, HStack, Text, Separator } from '@chakra-ui/react';
import Link from 'next/link';
import {
  EnvelopeSimpleOpenIcon,
  PhoneCallIcon,
  LinkedinLogoIcon,
  GlobeHemisphereWestIcon,
  GithubLogoIcon,
  PrinterIcon
} from '@phosphor-icons/react';
import { RefObject, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useColorModeValue } from '@/components/ui/color-mode';
import { MastersCoursework } from '@/components/blocks/resume/grade-card-dialog';
import { iconBarHeight } from '@/components/shared/constants';

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

const ContactInformation = (props: { type: 'email' | 'linkedin' | 'number' | 'website' | 'github'; value: string }) => {
  const { type, value } = props;
  const getIcon = () => {
    switch (type) {
      case 'email':
        return <EnvelopeSimpleOpenIcon weight="duotone" fontSize="1.5rem" />;
      case 'number':
        return <PhoneCallIcon weight="duotone" fontSize="1.5rem" />;
      case 'linkedin':
        return <LinkedinLogoIcon weight="duotone" fontSize="1.5rem" />;
      case 'website':
        return <GlobeHemisphereWestIcon weight="duotone" fontSize="1.5rem" />;
      case 'github':
        return <GithubLogoIcon weight="duotone" fontSize="1.5rem" />;

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

const Information = (props: { printRef: RefObject<HTMLDivElement | null> }) => {
  const onPrint = useReactToPrint({ contentRef: props.printRef, bodyClass: 'print-agreement' });
  return (
    <Stack width={['full', '50rem']} bg="red.500" color="white">
      <Stack bg="rgba(0, 0, 0, 0.3)" p="2rem" pt="6rem" justify="center" alignItems="center" textAlign="center">
        <Avatar.Root boxSize="14rem" bg="red.500" color="white">
          <Avatar.Fallback name="Rohan Mohapatra" />
          <Avatar.Image src="/images/about.jpg" />
        </Avatar.Root>

        <Heading>Rohan Mohapatra</Heading>
        <Text color="whiteAlpha.900">M.S. Computer Science @ San Jose State University</Text>
        <Text color="whiteAlpha.900">
          Research Scientist @{' '}
          <Link style={{ textDecoration: 'underline' }} href="https://www.micosyslab.com/members#h.pgjipec4fuy1">
            MICoSys Lab
          </Link>
        </Text>

        <Button variant="subtle" size="sm" mt="1.5rem" onClick={onPrint}>
          <PrinterIcon weight="duotone" />
          Print
        </Button>
      </Stack>
      <Stack p="2rem">
        <ContactInformation type="email" value="rohannmohapatra@gmail.com" />
        <ContactInformation type="number" value="+1 (***) ***-9018" />
        <ContactInformation type="website" value="rohanmohapatra.github.io" />
        <ContactInformation type="linkedin" value="rohan-mohapatra" />
        <ContactInformation type="github" value="rohanmohapatra" />
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Programming Languages
        </Heading>
        {['Java', 'Typescript', 'Python', 'C++', 'C', 'Javascript'].map((language) => (
          <Text key={language}>{language}</Text>
        ))}
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Databases
        </Heading>
        {['Mongo DB', 'Cassandra', 'Amazon Dynamo DB', 'Neo4j Graph DB', 'PostgreSQL', 'Oracle', 'MySQL'].map((db) => (
          <Text key={db}> {db}</Text>
        ))}
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Libraries
        </Heading>
        <Heading size="md" textTransform="uppercase" pt="2rem">
          Tools/Technologies
        </Heading>
        {['Linux', 'Git', 'Kafka', 'Docker', 'Kubernetes', 'React.js', 'Hadoop / Hive', 'LaTeX'].map((db) => (
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
    <Stack gap="2">
      <Stack gap="0.5">
        <Title title="Bravo Award from GoTo Inc." date="2022" />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>
      <Stack gap="0.5">
        <Title title="Professor CNR Rao Merit Scholarship at PES University" date="2016-2020" />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>

      <Stack gap="0.5">
        <Title title="Professor M R Doreswamy Merit Scholarship at PES University" date="2016-2020" />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>

      <Stack gap="0.5">
        <Title title="Distinction Award for all semesters at PES University" date="2016-2020" />
        <Heading size="sm" color={headingColor}>
          Awardee
        </Heading>
      </Stack>
    </Stack>
  );
};
export const OnlineResume = () => {
  const headingColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.800');
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Stack direction={['column', 'row-reverse']} id="print-info" ref={ref} ml={iconBarHeight}>
      <Information printRef={ref} />
      <Stack p="2rem" pt="5rem" pr="2rem" id="print-info-content">
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Education
        </Heading>
        <Separator bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Stack gap="0.5">
          <Title title="M.S. Computer Science" date="August 2022 - Present" />
          <Heading size="sm" color={headingColor}>
            San Jose State University | San Jose, California
          </Heading>
          <List.Root pl="3rem">
            <List.Item>GPA: 3.83 / 4</List.Item>
            <List.Item textDecoration="underline">
              <MastersCoursework />
            </List.Item>
          </List.Root>
        </Stack>
        <Stack gap="0.5">
          <Title title="B.Tech. Computer Science and Engineering" date="August 2016 - May 2020" />
          <Heading size="sm" color={headingColor}>
            PES University | Bengaluru, India
          </Heading>
          <List.Root pl="3rem">
            <List.Item>GPA: 3.9 / 4</List.Item>
            <List.Item>Specialization: Algorithms and Computing Models</List.Item>
          </List.Root>
        </Stack>
        <Stack>
          <Heading size="lg" textTransform="uppercase" pt="2rem">
            Professional Experience
          </Heading>
          <Separator bg="red.500" w="40rem" opacity="1" height="0.2rem" />
          <Stack gap="0.5">
            <Title title="Research Scientist " date="September 2022 - Present" />
            <Heading size="sm" color={headingColor}>
              MICoSys Lab, San Jose State University | San Jose, CA
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Analyzed 100GB of hard disk failure data and performed ETL from multiple data sources to store on
                PostgreSQL.
              </List.Item>
              <List.Item>
                Designed a Transformer based Deep Learning Model to predict end-of-life of Hard disks and Li-ion
                batteries; increasing model performance by 74% from the state-of-the art models.
              </List.Item>
              <List.Item>Published 3 research papers at renowned conferences and journals</List.Item>
            </List.Root>
          </Stack>
          <Stack gap="0.5">
            <Title title="Software Engineer - II" date="October 2021 - August 2022" />
            <Heading size="sm" color={headingColor}>
              GoTo Inc. | Bengaluru, India
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Architected and engineered a platform on React, Typescript, and Electron housing all products of GoTo
                under one application; collaborated with engineers from 3 sites to increase performance of the platform
                by 80%.
              </List.Item>
              <List.Item>
                Led a team of 3 engineers and implemented multiple Java Spring-boot APIs for conference creation and
                lifecycle management and developed JavaScript and NodeJS-based Miro add-on for GoTo Training to enhance
                customer retention by ~29%.
              </List.Item>
              <List.Item>
                Analyzed Splunk logs to diagnose issues in first response on-call team and created RCA and reports for
                P1, P2 and P3 incidents; awarded Bravo Award for delivering high-quality products.
              </List.Item>
            </List.Root>
          </Stack>

          <Stack gap="0.5">
            <Title title="Software Engineer - I" date="August 2020 - September 2021" />
            <Heading size="sm" color={headingColor}>
              GoTo Inc. | Bengaluru, India
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Engineered Breakout Rooms built with React, NodeJS, and Java boosting customer satisfaction by ~40%.
              </List.Item>
              <List.Item>
                Redesigned the event generation and consumption mechanism on Spring 3.x services using Kafka for 5 times
                faster join to conferences.
              </List.Item>
              <List.Item>Promoted after a year to Software Engineer (Level-2), fastest across the company.</List.Item>
            </List.Root>
          </Stack>
        </Stack>

        <Stack>
          <Heading size="lg" textTransform="uppercase" pt="2rem">
            Internship Experience
          </Heading>
          <Separator bg="red.500" w="40rem" opacity="1" height="0.2rem" />
          <Stack gap="0.5">
            <Title title="Machine Learning Intern" date="June 2023 - August 2023" />
            <Heading size="sm" color={headingColor}>
              Spicyfy Ventures LLC | Irving, TX (Remote)
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Engineered a video sentiment analyzing & generative video composing service using Tensorflow and Deep
                learning increasing product sales by 45% in Q3 2023.
              </List.Item>
              <List.Item>
                Built a distributed system using Raft and Python to deploy ML services that cut service downtime by 91%.
              </List.Item>
            </List.Root>
          </Stack>
          <Stack gap="0.5">
            <Title title="Software Engineering Intern" date="January 2020 - July 2020" />
            <Heading size="sm" color={headingColor}>
              LogMeIn, Inc. | Bengaluru, India
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Worked alongside senior employees to develop micro-service deployment framework for Java, Python and
                NodeJS based services on Kubernetes (EKS) to deploy services in less than 1 minute.
              </List.Item>
              <List.Item>
                Automated multi-service monitoring by creating alerts and graphs using Jsonnet; increasing uptime of
                micro-services to 99.99%.
              </List.Item>
            </List.Root>
          </Stack>
          <Stack gap="0.5">
            <Title title="Machine Learning Intern" date="June 2019 - August 2019" />
            <Heading size="sm" color={headingColor}>
              Itron India Private Limited | Bengaluru, India
            </Heading>
            <List.Root pl="3rem">
              <List.Item>
                Built a time and memory efficient HDBSCAN library in C++ to cluster usage statistics from real-time data
                received from electric meters; saving the company $20K+ quarterly on maintenance
              </List.Item>
            </List.Root>
          </Stack>
        </Stack>

        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Projects
        </Heading>
        <Separator bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Heading size="lg" textTransform="uppercase" pt="2rem">
          Awards
        </Heading>
        <Separator bg="red.500" w="40rem" opacity="1" height="0.2rem" />
        <Awards />
      </Stack>
    </Stack>
  );
};
