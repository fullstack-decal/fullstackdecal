import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Box, Text, Container } from '@chakra-ui/react';

import OldNav from '../../components/fa22/OldNav';

import RecruitingResources from '../../data/fa22/recruiting-resources.mdx';
import DevResources from '../../data/fa22/dev-resources.mdx';
import PastIterations from '../../data/fa22/past-iterations.mdx';

const Resources = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <OldNav />
      <Box w="100vw" className="darkModeContainer">
        <Container maxW="container.lg" pt={16} pb={20} px={[7, 10]}>
          <Text textStyle="title2" color="blue" mb={[6]}>
            RESOURCES
          </Text>
          <Text textStyle="subtitle1" mb={4}>
            Software Engineering Recruiting Resources
          </Text>
          <RecruitingResources />

          <Text textStyle="subtitle1" mt={2} mb={4}>
            Development & Design Resources
          </Text>
          <DevResources />

          <Text textStyle="subtitle1" mt={2} mb={4}>
            Past Course Iterations
          </Text>
          <PastIterations />
        </Container>
      </Box>
    </Layout>
  );
};

export default Resources;
