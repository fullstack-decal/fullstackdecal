import React from 'react';

import { Flex, Box, Text, Icon, Link } from '@chakra-ui/react';

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
  <Box>
    <Flex align="center">
      <img
        src={image}
        alt={name}
        style={{ borderRadius: '100rem', width: '10rem' }}
      />
      <Box ml={6}>
        <Text textStyle="subtitle1">{name}</Text>
        <Flex align="center">
          <Text textStyle="subtitle2" color="blue" mb={1}>
            {role}
          </Text>
          <Link
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            ml={2}
            isExternal
          >
            <Icon as={BsLinkedin} h={5} w={5} color="blue" />
          </Link>
          {personal && (
            <Link
              href={personal}
              target="_blank"
              rel="noreferrer"
              ml={2}
              isExternal
            >
              <Icon as={BsGlobe} h={5} w={5} color="blue" />
            </Link>
          )}
          {email && (
            <Link
              href={email}
              target="_blank"
              rel="noreferrer"
              ml={0.5}
              isExternal
            >
              <Icon as={MdEmail} h={7} w={9} color="blue" />
            </Link>
          )}
        </Flex>
      </Box>
    </Flex>

    <Text textStyle="body1" mt={5} lineHeight="27px">
      {bio}
    </Text>
  </Box>
);

export default StaffMember;
