import React from 'react';
import Layout from '@theme/Layout';
import { Box, ChakraProvider, Heading, Stack } from '@chakra-ui/react';
import { theme, useBackgroundImage } from '../components/Theme';
import Iframe from 'react-iframe';
import { useColorMode } from '@docusaurus/theme-common';

const Resume = () => {
  const backgroundImage = useBackgroundImage();
  const { colorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Stack
        p={{ base: '1rem', md: '2rem' }}
        boxSize="full"
        backgroundImage={backgroundImage}
        justify="center"
        alignItems="center"
      >
        <Box
          rounded="lg"
          p="2rem"
          boxShadow={colorMode == 'light' ? '2xl' : 'dark-lg'}
        >
          <Heading
            size="sm"
            pb="0.75rem"
            color={colorMode == 'light' ? 'black' : 'white'}
          >
            Rohan Mohapatra - Résumé
          </Heading>
          <Iframe
            url="/pdfs/RohanMohapatra_Resume.pdf"
            width="800px"
            height="1100px"
          ></Iframe>
        </Box>
      </Stack>
    </ChakraProvider>
  );
};

const ResumeWrapper = () => {
  return (
    <Layout title="Rohan Mohapatra | Résumé">
      <Resume />
    </Layout>
  );
};

export default ResumeWrapper;
