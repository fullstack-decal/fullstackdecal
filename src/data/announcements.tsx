import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import week0 from './recruitingAnnouncement';

const announcements = [
  week0,
  <Box key={1}>
    <Text textStyle="body" mb={6}>
      Thank you for applying to the Full-Stack DeCal! Decisions have been sent
      out so, make sure to check your email!
    </Text>
  </Box>
];

export default announcements;
