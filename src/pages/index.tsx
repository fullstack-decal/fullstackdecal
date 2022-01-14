import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Container, Flex, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Container maxW="container.xl" py={10}>
        <Text textStyle="title" mb={6}>
          CS 198-099: Introduction to Full Stack Development
        </Text>
        <Text textStyle="body" mb={4}>
          Welcome to{' '}
          <a href="https://webatberkeley.org/">Web Development at Berkeley</a>
          {'&apos;'}s Introduction to Full Stack Development! In this course, we
          cover the basics of web development, how the internet works, and the
          frameworks, technologies, and best practices that are used in the
          industry today. No prior CS experience is required to participate and
          succeed in this course, but we do acknowledge that we cover a fairly
          large amount of material and that this course can feel like a lot,
          even for those with past CS experience.
        </Text>
        <Flex layerStyle="aside">
          <Text textStyle="body">
            💡 The materials in this course have been made available to the
            public in pursuit of reaching, educating, and supporting as many
            people as we can.
          </Text>
        </Flex>
        <Text textStyle="subtitle1" mt={8}>
          Course Overview
        </Text>
      </Container>
    </Layout>
  );
};

export default Home;
