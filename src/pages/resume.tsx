import React from 'react';
import Layout from '@theme/Layout';
import { Box, ChakraProvider, Heading, Stack } from '@chakra-ui/react';
import { theme } from '../components/Theme';
import Iframe from 'react-iframe';

const Resume = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout title="Rohan Mohapatra | Résumé">
        <Stack
          p={{ base: '1rem', md: '2rem' }}
          boxSize="full"
          backgroundImage="
      linear-gradient(to bottom, rgba(255,255,255,1) 30%,rgba(255,255,255,0.95) 100%),
      url('/images/background.jpg');"
          justify="center"
          alignItems="center"
        >
          <Box rounded="lg" p="2rem" boxShadow="2xl">
            <Heading size="sm" pb="0.75rem">
              Rohan Mohapatra - Résumé
            </Heading>
            <Iframe
              url="/pdfs/RohanMohapatra_Resume.pdf"
              width="800px"
              height="1100px"
            ></Iframe>
          </Box>
        </Stack>
      </Layout>
    </ChakraProvider>
  );
};

export default Resume;
