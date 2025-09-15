'use client';
import { Stack } from '@chakra-ui/react';
import { motion } from 'motion/react';
import { About } from '@/components/blocks/home/about';
import { Introduction } from '@/components/blocks/home/introduction';
import { Projects } from '@/components/blocks/home/projects';
import { Publications } from '@/components/blocks/home/publications';
import { SayHello } from '@/components/blocks/home/say-hello';
import { ScrollNavBar } from '@/components/layout/scrollnavbar';

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'none' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ ease: ['easeIn', 'easeOut'], duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <section className="c-reset">
      <ScrollNavBar sections={['Home', 'About', 'Projects', 'Publications', 'Contact']} />
      <Stack
        gap="2rem"
        pl={{ base: '1.5rem', md: '10rem' }}
        overflowY="auto"
        overscrollBehaviorY="contain"
        scrollSnapType="y mandatory"
        h="100dvh"
        w="100%"
        position="relative"
      >
        <AnimationWrapper>
          <Introduction id="home" scrollSnapAlign="center" minH="100dvh" />
        </AnimationWrapper>

        <AnimationWrapper>
          <About id="about" scrollSnapAlign="center" minH="100dvh" pt="8rem" />
        </AnimationWrapper>

        <AnimationWrapper>
          <Projects id="projects" scrollSnapAlign="center" minH="100dvh" pt="8rem" />
        </AnimationWrapper>

        <AnimationWrapper>
          <Publications id="publications" scrollSnapAlign="center" minH="100dvh" pt="8rem" />
        </AnimationWrapper>

        <SayHello id="contact" scrollSnapAlign="center" minH="100dvh" justify="center" />
      </Stack>
    </section>
  );
};

export default Index;
