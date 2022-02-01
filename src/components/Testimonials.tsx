import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Testimonials: React.FC = () => {
  return (
    <>
      <Text textStyle="title2" color="purple" mt={16} mb={4}>
        Testimonials
      </Text>
      <Box mb={16}>
        <Text textStyle="body">
          &quot;The stuff I learned in this course helped me land a job at
          Tesla. The technicial interview was basically the same thing I worked
          on in my final project!&quot;
        </Text>
        <Text textStyle="body" ml={2} mt={2}>
          - Ani, Computer Science
        </Text>

        <Text textStyle="body" mt={4}>
          &quot;The stuff I learned in this course helped me land a job at
          Tesla. The technicial interview was basically the same thing I worked
          on in my final project!&quot;
        </Text>
        <Text textStyle="body" ml={2} mt={2}>
          - Ani, Computer Science
        </Text>
      </Box>
    </>
  );
};

export default Testimonials;
