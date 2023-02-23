import { Stack } from '@chakra-ui/react';
import React from 'react';

import { AboutMe } from './AboutMe';
import { Intro } from './Intro';
import { Projects } from './Projects';
import { Publications } from './Publications';
import { Qualifications } from './Qualifications';

export const Portfolio: React.FC = () => (
  <Stack
    boxSize="full"
    spacing={{ base: '2rem', md: '6rem' }}
    overflow="auto"
    alignItems="center"
  >
    <Intro id="home" />
    <AboutMe id="about" />
    {/* <Qualifications /> */}
    <Projects id="projects" />
    <Publications id="publications" />
  </Stack>
);
