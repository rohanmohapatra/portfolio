import React from 'react';
import Layout from '@theme/Layout';
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { useBackgroundImage } from '../components/Theme';
import Iframe from 'react-iframe';

const Resume = () => {
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
        ></Iframe>
      </Box>
    </Stack>
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
