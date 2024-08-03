import React from "react";
import staff from "../data/staff";
import pastStaff from "../data/pastStaff";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import StaffMember from "../components/StaffMember";
import PastStaffMember from "../components/PastStaffMember";

const Staff = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box w="100vw" className="darkModeContainer">
        <Container maxW="container.lg">
          <Text textStyle="title2">Spring 2023 Course Staff</Text>

          <SimpleGrid columns={[1, null, 2]} spacing={[12, 16]}>
            {staff.map(
              ({
                name,
                image,
                role,
                linkedin,
                website,
                bio,
                email,
                github,
              }) => (
                <StaffMember
                  name={name}
                  image={image}
                  role={role}
                  linkedin={linkedin}
                  website={website}
                  bio={bio}
                  email={email}
                  key={name}
                  github={github}
                />
              ),
            )}
          </SimpleGrid>
          <Text textStyle="title2" color="blue" mt={24} mb={6}>
            PAST COURSE STAFF{" "}
            <Text as="span" fontSize="2xl">
              & OTHER NOTABLE CONTRIBUTORS
            </Text>
          </Text>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {pastStaff.map(({ name, image, linkedin }) => (
              <PastStaffMember
                name={name}
                image={image}
                linkedin={linkedin}
                key={name}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Staff;
