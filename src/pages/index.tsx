import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Layout as MainLayout } from '../components/Layout';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Rohan Mohapatra">
      <MainLayout />
    </Layout>
  );
};
export default Home;
