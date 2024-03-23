import Head from 'next/head';
import { Heading, Stack } from '@chakra-ui/react';

import { Introduction } from '../components/introduction';
import { About } from '../components/about';
import { Publications } from '../components/publications';
import { Projects } from '../components/projects';
import { SayHello } from '../components/say-hello';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohan Mohapatra | Eat. Sleep. Code. Repeat.</title>
      </Head>
      <main>
        <Stack spacing="2rem" pl="10rem">
          <Introduction id="home" />
          <Stack spacing="16rem">
            <About id="about" />
            <Projects id="projects" />
            <Publications id="publications" />
            <SayHello />
            <Stack w="full" align="center" pb="2rem" pr="10rem">
              <Heading variant="code" size="sm">
                Designed & Built by Rohan Mohapatra
              </Heading>
            </Stack>
          </Stack>
        </Stack>
      </main>
    </>
  );
}
