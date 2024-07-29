import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box, Text, Container } from "@chakra-ui/react";
import RecruitingResources from "../data/recruiting-resources.mdx";
import DevResources from "../data/dev-resources.mdx";
import PastIterations from "../data/past-iterations.mdx";

const Resources = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box w="100vw" className="darkModeContainer">
        <Container maxW="container.lg" mb={20}>
          <Text textStyle="title2">Resources</Text>
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
