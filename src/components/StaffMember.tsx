import React from 'react';

import { Flex, VStack, Text, Icon } from '@chakra-ui/react';

import { BsLinkedin, BsGlobe } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

type StaffMemberProps = {
  name: string;
  image: string;
  role: string;
  linkedin: string;
  personal: string | undefined;
  bio: string;
  email: string | undefined;
};

const StaffMember: React.FC<StaffMemberProps> = ({
  name,
  image,
  role,
  linkedin,
  personal,
  bio,
  email,
}) => (
  <VStack spacing={2} align="flex-start">
    <img src={image} alt={name} width="50%" style={{ borderRadius: '.5rem' }}/>
    <Text as="p" mb={0} fontWeight="bold" fontSize="xl" pt={1}>
      {name} - {role}
    </Text>
    <Text as="p" mb={0} fontWeight="normal" fontSize="md">
      {bio}
    </Text>
    <Flex pt={1.5} align="center">
      <a href={linkedin} target="_blank" rel="noreferrer">
        <Icon as={BsLinkedin} h={7} w={7} color="blue.600" />
      </a>
      {personal && (
        <a href={personal} target="_blank" rel="noreferrer">
          <Icon as={BsGlobe} h={7} w={7} color="blue.600" ml={4} />
        </a>
      )}

      {email && (
        <a href={email} target="_blank" rel="noreferrer">
          <Icon as={MdEmail} h={9} w={12} color="blue.600" ml={2} />
        </a>
      )}
    </Flex>
  </VStack>
);

export default StaffMember;
