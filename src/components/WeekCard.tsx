import React from 'react';

import { Box, Flex, VStack, Text, Tag } from '@chakra-ui/react';

type Lesson = {
  date: string;
  format: string;
  topic: string;
  reading?: string;
  assigmentFormat?: string;
  assigmentTitle?: string;
  starterCode?: string;
};

type WeekCardProps = {
  weekNumber: number;
  lessons: Lesson[];
};

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, lessons }) => (
  <Box>
    <Text>Week {weekNumber}</Text>
    {lessons.map((lesson) => (
      <Box key={lesson.date}>
        <Flex>
          {lesson.date}
          <VStack spacing={3}>
            <Flex>
              <Tag>{lesson.format}</Tag>
              <Text>{lesson.topic}</Text>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    ))}
  </Box>
);

export default WeekCard;
