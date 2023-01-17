import React from 'react';

import { Flex, Box, Text, Icon, Link } from '@chakra-ui/react';

import { BsLinkedin, BsGlobe, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

type StaffMemberProps = {
  name: string;
  image: string;
  role: string;
  linkedin: string | undefined;
  personal: string | undefined;
  bio: string;
  email: string | undefined;
  github: string | undefined;
};

const StaffMember: React.FC<StaffMemberProps> = ({
  name,
  image,
  role,
  linkedin,
  personal,
  bio,
  email,
  github,
}) => (
  <Box>
    <Flex align="center" direction={['column', 'row']}>
      <img
        src={image}
        alt={name}
        style={{ borderRadius: '100rem', width: '10rem' }}
      />
      <Flex direction="column" align={['center', 'flex-start']} ml={[0, 6]}>
        <Text textStyle="subtitle1" className="darkMode">{name}</Text>
        <Flex align="center">
          <Text textStyle="subtitle2" color="blue" mb={1}>
            {role}
          </Text>
          {linkedin && (
            <Link
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            ml={2}
            isExternal
          >
            <Icon as={BsLinkedin} h={5} w={5} color="blue" />
          </Link>
          )}
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
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              ml={2}
              isExternal
            >
              <Icon as={BsGithub} h={5} w={5} color="blue" />
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>

    <Text textStyle="body1" mt={[3, 5]} lineHeight="27px" fontWeight="normal" className="darkMode">
      {bio}
    </Text>
  </Box>
);

export default StaffMember;
