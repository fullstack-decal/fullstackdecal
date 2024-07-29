import React from 'react';

import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';

interface PastStaffMemberProps {
  name: string;
  image: string;
  linkedin: string;
}

const PastStaffMember: React.FC<PastStaffMemberProps> = ({
  name,
  image,
  linkedin,
}) => (
  <Flex direction="column" align="center">
    <img
      src={image}
      alt={name}
      style={{ borderRadius: '100rem', width: '10rem' }}
    />
    <Flex mt={3} align="center" justify="center">
      <Text textStyle="subtitle2" color="blue" mb={1}>
        {name}
      </Text>
      <Link href={linkedin} target="_blank" rel="noreferrer" ml={2} isExternal>
        <Icon as={BsLinkedin} h={5} w={5} color="blue" />
      </Link>
    </Flex>
  </Flex>
);

export default PastStaffMember;
