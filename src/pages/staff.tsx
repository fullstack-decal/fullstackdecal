import React from 'react';
import staff from '../data/staff';
import pastStaff from '../data/pastStaff';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Box, Text, Container, SimpleGrid } from '@chakra-ui/react';
import StaffMember from '../components/StaffMember';
import PastStaffMember from '../components/PastStaffMember';

const Staff = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box w="100vw" className="darkModeContainer">
        <Container maxW="container.lg" pt={16} pb={20} px={[7, 10]}>
          <Text textStyle="title2" color="blue" mb={[8, 12]}>
            SPRING 2022 COURSE STAFF
          </Text>

          <SimpleGrid columns={[1, null, 2]} spacing={[12, 16]}>
            {staff.map(
              ({ name, image, role, linkedin, personal, bio, email }) => (
                <StaffMember
                  name={name}
                  image={image}
                  role={role}
                  linkedin={linkedin}
                  personal={personal}
                  bio={bio}
                  email={email}
                  key={name}
                />
              )
            )}
          </SimpleGrid>
          <Text textStyle="title2" color="blue" mt={24} mb={6}>
            PAST COURSE STAFF{' '}
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
          {/*
          - [Arushi Somani](https://www.linkedin.com/in/arushisomani/)
          - [Hector Ramos](https://www.linkedin.com/in/hector-ramos-/)
          - [Abhi Wadekar](https://www.linkedin.com/in/abhiraam-wadekar/)
          - [Ervin Baccay](https://www.linkedin.com/in/ebaccay/)
          - [Brian Holt](https://www.linkedin.com/in/btholt/)
        */}
        </Container>
      </Box>
    </Layout>
  );
};

export default Staff;
