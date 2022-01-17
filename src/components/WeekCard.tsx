import React from 'react';
import { Lesson } from '../types';
import { Flex, Text, Tag, Divider } from '@chakra-ui/react';
import Link from '@docusaurus/Link';

type ContentProps = {
  label: string;
  title: string;
  dueDate?: string;
  link?: string;
  color?: string;
};

type WeekCardProps = {
  weekNumber: number;
  lessons: Lesson[];
};

const Content: React.FC<ContentProps> = ({
  label,
  title,
  dueDate,
  link,
  color,
}) => {
  let category;
  if (label.includes('Lecture')) {
    category = 'lecture';
  }

  return (
    <Flex align="center">
      <Tag
        mr={3}
        borderRadius="full"
        px={4}
        py={1.5}
        border={category === 'lecture' ? 'none' : '2px solid white'}
        bg={category === 'lecture' ? 'white' : 'transparent'}
      >
        <Text
          textStyle="body1"
          color={category === 'lecture' ? color : 'white'}
        >
          {label}
        </Text>
      </Tag>
      <Text textStyle="body1" color="white">
        {link ? <Link to={link}>{title}</Link> : title}
        <Text as="span" textStyle="body" fontWeight="bold">
          {dueDate && ` (due ${dueDate})`}
        </Text>
      </Text>
    </Flex>
  );
};

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, lessons }) => {
  const colors = [
    'purple',
    'orange',
    'orange',
    'orange',
    'blue',
    'blue',
    'pink',
    'purple',
    'blue',
    'pink',
    'pink',
    'purple'
  ];

  return (
    <Flex
      align="center"
      bg={`${colors[weekNumber]}Gradient`}
      px={12}
      py={8}
      borderRadius="3xl"
    >
      <Text textStyle="subtitle2" fontSize="3xl" color="white">
        Week {weekNumber}
      </Text>
      <Divider
        orientation="vertical"
        h={60}
        w={1}
        borderRadius="full"
        opacity={1}
        bg="white"
        mx={10}
      />
      <Flex gap={28}>
        {lessons.map((lesson) => (
          <Flex direction="column" gap={5} key={lesson.date}>
            <Text textStyle="label1">{lesson.date}</Text>
            <Content
              label={lesson.format}
              title={lesson.topic}
              color={colors[weekNumber]}
            />
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
        ))}
      </Flex>
    </Flex>
  );
};

export default WeekCard;
