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
        <Container maxW="container.lg" pt={16} pb={20} px={[7, 10]}>
          <Text textStyle="title2" color="blue" mb={[6]}>
            ENROLL
          </Text>
          <Text style={{ fontSize: 33 }} mb={[50]}>
            We're excited to have you join our Fall 2023 class!
          </Text>
          <Text style={{ fontSize: 25 }} mb={[100]}>
            To apply please fill out the{" "}
            <a
              href="https://airtable.com/app4DQfVs1iDSqn4b/shrFGkWU1iF8nLpgS"
              target="_blank"
              rel="noreferrer"
            >
              application form.
            </a>
          </Text>

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
