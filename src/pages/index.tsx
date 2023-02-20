import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  ChakraProvider,
  useColorMode as useChakraColorMode,
} from '@chakra-ui/react';
import { theme } from '../components/Theme';
import { Layout as MainLayout } from '../components/Layout';
import { useColorMode } from '@docusaurus/theme-common';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Rohan Mohapatra`}>
      <HomeWrapper />
    </Layout>
  );
};

const HomeWrapper: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout />
    </ChakraProvider>
  );
};

export default Home;
