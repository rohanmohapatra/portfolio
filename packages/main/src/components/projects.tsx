import '@/styles/carousel.module.css';
import {
  Stack,
  HStack,
  Heading,
  Box,
  BoxProps,
  useBreakpointValue,
  Image,
  useColorModeValue,
  Button,
  Icon
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { FaCode, FaCodeBranch, FaStar } from 'react-icons/fa6';
import axios from 'axios';
import { FiChevronsLeft, FiChevronsRight, FiGithub } from 'react-icons/fi';

import { backendApi, githubApi } from '../lib/constants';
import { openUrl } from '../lib/utils';

import { Divider } from './shared/divider';

const processProjects = async () => {
  let response = await axios(`${backendApi}/github-access-token`);
  const githubToken = response.data.accessToken;

  response = await axios(`${backendApi}/projects`);
  const requiredProjects = response.data.projects;

  response = await axios.get(githubApi, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: 'application/vnd.github+json'
    }
  });

  let projectsData: Project[] = response.data;
  projectsData = projectsData.filter((project) =>
    requiredProjects.includes(project.name)
  );
  projectsData.sort((a, b) => b.stargazers_count - a.stargazers_count);
  //   .sort((a, b) => b.forks_count - a.forks_count);
  return projectsData;
};

interface Project {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  has_pages: boolean;
  description?: string;
}

const Project = ({
  html_url,
  name,
  language,
  stargazers_count,
  forks_count,
  boxProps,
  description
}: Project & { boxProps: BoxProps }) => {
  return (
    <Stack {...boxProps} w="24rem" align="center">
      <Image
        height="12rem"
        width="24rem"
        rounded="md"
        mb="-2rem"
        src={`/projects/${name}.png`}
        boxShadow="0px 1px 14px 1px #FF4F5B"
        cursor="pointer"
        _hover={{ boxShadow: '0px 1px 24px 1px #FF4F5B' }}
        onClick={() => openUrl(html_url)}
        alt={name}
      />
      <Stack
        rounded="md"
        color={useColorModeValue('white', 'gray.900')}
        bg={useColorModeValue('gray.800', 'white')}
        align="center"
        px="2rem"
        border="1px solid black"
      >
        <Heading size="md" textAlign="center" pt="0.5rem">
          {name}
        </Heading>
        <HStack spacing="1.3rem">
          <HStack>
            <FaCode />
            <Heading size="sm">{language}</Heading>
          </HStack>
          <HStack>
            <FaStar />
            <Heading size="sm">{stargazers_count}</Heading>
          </HStack>
          <HStack>
            <FaCodeBranch />
            <Heading size="sm">{forks_count}</Heading>
          </HStack>
        </HStack>
        <Heading
          w="13rem"
          variant="code"
          fontSize="0.65rem"
          pb="0.5rem"
          textAlign="center"
        >
          {description}
        </Heading>
      </Stack>
    </Stack>
  );
};

const ProjectShowcase = ({ projects }: { projects: Project[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }: BoxProps) => {
    return (
      <Box
        position="absolute"
        right="0"
        top="50%"
        zIndex="10"
        onClick={onClick}
        cursor="pointer"
      >
        <Icon as={FiChevronsRight} boxSize="3rem" rounded="full" bg="red.500" />
      </Box>
    );
  };

  const PrevArrow = ({ onClick }: BoxProps) => {
    return (
      <Box
        position="absolute"
        left="0"
        top="50%"
        zIndex="10"
        onClick={onClick}
        cursor="pointer"
      >
        <Icon as={FiChevronsLeft} boxSize="3rem" rounded="full" bg="red.500" />
      </Box>
    );
  };

  const settings: Settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  };

  return (
    <Box width="100%" height="300px">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Stack
            key={index}
            boxSize="full"
            id="ok"
            sx={{
              justifyContent: 'center !important',
              alignItems: 'center !important',
              display: 'flex !important'
            }}
          >
            <Project
              boxProps={{
                height: '300px',
                ...(imageIndex === index
                  ? { transform: 'scale(1.1)', opacity: 1 }
                  : { transform: 'scale(0.5)', opacity: 0.8 }),
                transition: 'transform 300ms',
                marginTop: '1.5rem'
              }}
              {...project}
            ></Project>
          </Stack>
        ))}
      </Slider>
    </Box>
  );
};

export const Projects = (props: BoxProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  // eslint-disable-next-line no-unused-vars
  const projectsLength = useBreakpointValue({ base: 5, md: 'full' });
  useEffect(() => {
    processProjects().then((projectsData) => setProjects(projectsData));
  }, []);
  return (
    <Stack h="full" w="full" spacing="8rem" pr="9rem" {...props}>
      <HStack w="60%" alignSelf="center">
        <Divider orientation="horizontal" />
        <Heading variant="code" size="lg">
          02.
        </Heading>
        <Heading size="lg" mr="1rem">
          {`Things I've built`}
        </Heading>
        <Divider orientation="horizontal" />
      </HStack>
      <ProjectShowcase projects={projects} />
      <Stack align="center" w="full">
        <Button
          variant="outline"
          rightIcon={<FiGithub />}
          onClick={() => openUrl('https://github.com/rohanmohapatra')}
        >
          View More on
        </Button>
      </Stack>
    </Stack>
  );
};
