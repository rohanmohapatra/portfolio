import { Stack } from '@chakra-ui/react';
import { About } from '@/components/blocks/home/about';
import { Introduction } from '@/components/blocks/home/introduction';
import { Projects } from '@/components/blocks/home/projects';
import { Publications } from '@/components/blocks/home/publications';
import { SayHello } from '@/components/blocks/home/say-hello';
import { Footer } from '@/components/layout/footer';

const Index = () => {
  return (
    <section className="c-reset">
      <Stack gap="2rem" pl={{ base: '1.5rem', md: '10rem' }}>
        <Introduction id="home" />
        <Stack gap={['2rem', '16rem']} pr={{ base: '1.5rem', md: '0rem' }}>
          <About id="about" />
          <Projects id="projects" />
          <Publications id="publications" />
          <SayHello />
          <Footer />
        </Stack>
      </Stack>
    </section>
  );
};

export default Index;
