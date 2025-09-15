'use client';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import { Button, Heading, HStack, Stack, StackProps, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ArrowSquareOutIcon, CodeIcon, GitForkIcon, StarIcon } from '@phosphor-icons/react';
import { Project } from '@/lib/api';
import { useColorModeValue } from '@/components/ui/color-mode';
import { openUrl } from '@/lib/utils';

const Masonry = dynamic(() => import('react-responsive-masonry'), {
  ssr: false
});

const ProjectCard = ({
  url,
  name,
  primaryLanguage,
  stargazerCount,
  forkCount,
  description,
  height,
  mt,
  ...rest
}: Project & StackProps) => {
  return (
    <Stack
      {...rest}
      position="relative"
      p="1rem"
      rounded="md"
      boxShadow="md"
      height={height}
      w="full"
      mt={mt}
      justify="space-between"
      border="1px solid"
      borderColor="red.500"
      isolation="isolate"
      overflow="hidden"
      _hover={{
        _before: {
          opacity: 1,
          backgroundImage:
            'radial-gradient(at 35% 98%, var(--chakra-colors-red-600) 0px, transparent 50%),radial-gradient(at 10% 84%, var(--chakra-colors-red-300) 0px, transparent 50%),radial-gradient(at 91% 91%, var(--chakra-colors-red-400) 0px, transparent 50%),radial-gradient(at 58% 100%, var(--chakra-colors-red-500) 0px, transparent 50%)'
        }
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 30,
        left: -10,
        rotate: '-10deg',
        width: '140%',
        height: '100%',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: -1
      }}
    >
      {/* <Image
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
      /> */}
      <Stack gap="0.25rem">
        <Heading size="lg">{name}</Heading>
        <Text fontSize="0.85rem" color={useColorModeValue('blackAlpha.600', 'whiteAlpha.800')} pb="0.5rem">
          {description}
        </Text>
      </Stack>
      <Stack>
        <HStack gap="1rem">
          <HStack>
            <CodeIcon color="var(--chakra-colors-red-500)" weight="bold" fontSize="1.2rem" />
            <Heading size="sm">{primaryLanguage?.name}</Heading>
          </HStack>
          <HStack>
            <StarIcon color="var(--chakra-colors-red-500)" weight="bold" fontSize="1.2rem" />
            <Heading size="sm">{stargazerCount}</Heading>
          </HStack>
          <HStack>
            <GitForkIcon color="var(--chakra-colors-red-500)" weight="bold" fontSize="1.2rem" />
            <Heading size="sm">{forkCount}</Heading>
          </HStack>
          <HStack>
            <Button size="xs" variant="subtle" onClick={() => openUrl(url)}>
              <ArrowSquareOutIcon color="var(--chakra-colors-red-500)" weight="bold" fontSize="1.2rem" />
              <Heading size="sm">View </Heading>
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export const ProjectsList = ({ projects }: { projects: Project[] }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4 }}>
      <Masonry gutter="2px">
        {projects
          .map((project, index) => {
            const updatedProject = {
              ...project,
              height: project.forkCount === 0 ? '15rem' : 10 + project.forkCount / 2 + 'rem'
            };

            if (index === 0) {
              return {
                ...updatedProject,
                mt: '0rem'
              };
            } else if (index === 1) {
              return { ...updatedProject, mt: '-2rem' };
            } else if (index === 2) {
              return { ...updatedProject, mt: '-3rem' };
            } else if (index === 3) {
              return { ...updatedProject, mt: '3rem' };
            } else {
              return { ...updatedProject, mt: '0rem' };
            }
          })
          .map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
