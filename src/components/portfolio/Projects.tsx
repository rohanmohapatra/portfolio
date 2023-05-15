import {
  BoxProps,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCode, FaCodeBranch, FaPlay, FaStar } from 'react-icons/fa';

import { openUrl } from '../../utils/helpers';
import requiredProjects from '../../utils/projects.json';
import { githubToken } from './constants';

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

const ProjectCard: React.FC<Project> = (props) => {
  const {
    name,
    language,
    stargazers_count,
    forks_count,
    html_url,
    has_pages,
    description,
  } = props;
  return (
    <Button
      as={Stack}
      size="3xl"
      justifyContent="space-between"
      alignItems="flex-start"
      onClick={() => openUrl(html_url)}
      cursor="pointer"
    >
      <Stack w="90%">
        <Heading fontSize="1.25rem" whiteSpace="normal">
          {name}
        </Heading>
        {description && (
          <Text fontSize="0.7rem" fontWeight="normal" whiteSpace="normal">
            {description}
          </Text>
        )}
      </Stack>

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
        {has_pages && (
          <Button
            variant="link"
            onClick={(event: any) => {
              openUrl(`https://rohanmohapatra.github.io/${name}`);
              event.preventDefault();
            }}
          >
            <HStack>
              <FaPlay />
              <Heading size="sm">Demo</Heading>
            </HStack>
          </Button>
        )}
      </HStack>
    </Button>
  );
};

export const Projects: React.FC<BoxProps> = (props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const projectsLength = useBreakpointValue({ base: 5, md: 'full' });

  useEffect(() => {
    const url = 'https://api.github.com/user/repos?per_page=100';
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${atob(githubToken)}`,
          Accept: 'application/vnd.github+json',
        },
      })
      .then((result) => {
        let projectsData: Project[] = result.data;
        console.log(requiredProjects);
        projectsData = projectsData.filter((project) =>
          requiredProjects.includes(project.name)
        );
        projectsData.sort((a, b) => b.stargazers_count - a.stargazers_count);
        //   .sort((a, b) => b.forks_count - a.forks_count);
        setProjects(projectsData);
      });
  }, []);

  return (
    <Stack justify="center" alignItems="center" {...props}>
      <Heading fontSize="2xl">Projects</Heading>
      <Stack justify="center" alignItems="center" py="2rem">
        {projects.length ? (
          <SimpleGrid columns={3} spacing={2}>
            {projectsLength && projectsLength === 'full'
              ? projects.map((project) => (
                  <ProjectCard {...project} key={project.id} />
                ))
              : projects
                  .slice(0, Number(projectsLength))
                  .map((project) => (
                    <ProjectCard {...project} key={project.id} />
                  ))}
            <Button
              as={Stack}
              size="3xl"
              justifyContent="space-between"
              alignItems="flex-start"
              onClick={() =>
                openUrl('https://github.com/rohanmohapatra?tab=repositories')
              }
              cursor="pointer"
            >
              <Heading
                width="95%"
                size="lg"
                whiteSpace="normal"
                wordWrap="break-word"
              >
                More ...
              </Heading>
            </Button>
          </SimpleGrid>
        ) : (
          <>
            <Spinner size="lg" />
            <Text fontSize="md">Please wait while I fetch from my GitHub</Text>
          </>
        )}
      </Stack>
    </Stack>
  );
};
