'use client';

import { Stack, HStack, Heading, StackProps } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ProjectsList } from '@/components/shared/projects-list';
import { processProjects, Project } from '@/lib/api';
import { Divider } from '@/components/shared/divider';

export const Projects = (props: StackProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  // const projectsLength = useBreakpointValue({ base: 5, md: 'full' });
  useEffect(() => {
    processProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <Stack h="full" w="full" gap="8rem" pr="9rem" {...props}>
      <HStack w="70%" alignSelf="center">
        <Divider orientation="horizontal" />
        <Heading code size="3xl" ml="1rem">
          02.
        </Heading>
        <Heading size="3xl" mr="1rem">
          {`Things I've built`}
        </Heading>
        <Divider orientation="horizontal" />
      </HStack>
      <ProjectsList projects={projects} />
    </Stack>
  );
};
