import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Theme';
import { Layout as MainLayout } from '../components/Layout';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider theme={theme}>
      <Layout title={`Rohan Mohapatra`}>
        <MainLayout />
      </Layout>
    </ChakraProvider>
  );
};

export default Home;
