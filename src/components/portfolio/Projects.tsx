import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { githubToken } from './constants';
import { FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';
import requiredProjects from '../../utils/projects.json';
import { openUrl } from '../../utils/helpers';

interface Project {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const ProjectCard: React.FC<Project> = (props) => {
  const { name, language, stargazers_count, forks_count, html_url } = props;
  return (
    <Button
      as={Stack}
      size="3xl"
      justifyContent="space-between"
      alignItems="flex-start"
      onClick={() => openUrl(html_url)}
      cursor="pointer"
    >
      <Heading width="90%" size="lg" whiteSpace="normal" wordWrap="break-word">
        {name}
      </Heading>
      <HStack>
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
    </Button>
  );
};

export const Projects: React.FC<BoxProps> = (props) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const url = `https://api.github.com/user/repos?per_page=100`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
        },
      })
      .then((result) => {
        let projects: Project[] = result.data;
        console.log(requiredProjects);
        projects = projects.filter((project) =>
          requiredProjects.includes(project.name)
        );
        projects.sort((a, b) => b.stargazers_count - a.stargazers_count);
        //   .sort((a, b) => b.forks_count - a.forks_count);
        setProjects(projects);
      });
  }, []);

  return (
    <Stack justify="center" alignItems="center" {...props}>
      <Heading fontSize="2xl">Projects</Heading>
      <Stack justify="center" alignItems="center" py="2rem">
        {projects.length ? (
          <SimpleGrid columns={3} spacing={2}>
            {projects.map((project) => (
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
