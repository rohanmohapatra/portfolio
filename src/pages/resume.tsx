import {
  Box, Heading, Stack, useColorModeValue,
} from '@chakra-ui/react';
import Layout from '@theme/Layout';
import React from 'react';
import Iframe from 'react-iframe';

import { useBackgroundImage } from '../components/Theme';

function Resume() {
  const backgroundImage = useBackgroundImage();
  return (
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
        boxShadow={useColorModeValue('2xl', 'dark-lg')}
      >
        <Heading
          size="sm"
          pb="0.75rem"
          color={useColorModeValue('black', 'white')}
        >
          Rohan Mohapatra - Résumé
        </Heading>
        <Iframe
          url="/pdfs/RohanMohapatra_Resume.pdf"
          width="800px"
          height="1100px"
        />
      </Box>
    </Stack>
  );
}

function ResumeWrapper() {
  return (
    <Layout title="Rohan Mohapatra | Résumé">
      <Resume />
    </Layout>
  );
}

export default ResumeWrapper;
