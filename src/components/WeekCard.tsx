import React from 'react';
import { Lesson } from '../types';
import { Box, Flex, Text, Tag, Divider } from '@chakra-ui/react';
import Link from '@docusaurus/Link';

type ContentProps = {
  label: string;
  title: string;
  dueDate?: string;
  link?: string;
};

type WeekCardProps = {
  weekNumber: number;
  lessons: Lesson[];
};

const Content: React.FC<ContentProps> = ({ label, title, dueDate, link }) => (
  <Flex align="center">
    <Tag mr={3}>{label}</Tag>
    <Text textStyle="body">
      {link ? <Link to={link}>{title}</Link> : title}
      <Text as="span" textStyle="body" fontWeight="bold">
        {dueDate && ` (due ${dueDate})`}
      </Text>
    </Text>
  </Flex>
);

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, lessons }) => (
  <Box>
    <Text textStyle="subtitle2">Week {weekNumber}</Text>
    <Divider my={2} />
    {lessons.map((lesson) => (
      <Flex key={lesson.date} mt={5} ml={3}>
        <Text textStyle="body" fontWeight="bold" mr={4} w={20}>
          {lesson.date}:
        </Text>
        <Flex direction="column" gap={3}>
          <Content label={lesson.format} title={lesson.topic} />
          {lesson.readingTitle && (
            <Content
              label="Reading"
              title={lesson.readingTitle}
              link={lesson.readingLink}
            />
          )}
          {lesson.assigmentFormat && (
            <Content
              label={lesson.assigmentFormat}
              title={lesson.assigmentTitle}
              dueDate={lesson.assigmentDueDate}
            />
          )}
        </Flex>
      </Flex>
    ))}
  </Box>
);

export default WeekCard;
