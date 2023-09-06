import React from "react";
import { Schedule, Assignment } from "../types";
import { HiOutlineBookOpen } from "react-icons/hi";
import { CgPill } from "react-icons/cg";
import { BsRecordFill } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";
import {
  HStack,
  Stack,
  VStack,
  Container,
  Box,
  Flex,
  Text,
  Tag,
  Divider,
  Center,
  Link as ChakraLink,
  LightMode,
} from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";

type WeekCardProps = {
  weekNumber: number;
  schedule: Schedule;
  [x: string]: any;
};

const FirstWeekCol: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <Box width={["5rem", "7rem"]} flex="0 0 auto" textAlign="right" {...props}>
    {children}
  </Box>
);

const AssignmentLink: React.FC<{ assignment: Assignment }> = ({
  assignment,
}) => {
  const isVitamin = assignment.name.indexOf("Vitamin") >= 0;
  const icon = isVitamin ? (
    <CgPill style={{ marginBottom: "-2px" }} />
  ) : (
    <RiFilePaper2Fill style={{ marginBottom: "-2px" }} />
  );
  const color = isVitamin ? "purple" : "pink";
  return (
    <Text textStyle="label1">
      <ChakraLink color={color} mr={3} as={Link} to={assignment.link}>
        {icon} {assignment.name}
      </ChakraLink>
    </Text>
  );
};

const firstColWidth = ["5rem", "7rem"];

function dueDayForAssignment(assignment: Assignment, schedule: Schedule) {
  const lessonList = schedule.weeks.flatMap((week) => week.lessons);
  const lessonNameList = schedule.weeks.flatMap((week) =>
    week.lessons.map((lesson) => lesson.topic)
  );
  const assignedLessonNo = lessonNameList.indexOf(assignment.assigned);
  const dueLessonNo = assignedLessonNo + assignment.due;
  return lessonList[dueLessonNo];
}

function isDueDateForAssignment(
  name: string,
  assignment: Assignment,
  schedule: Schedule
) {
  return dueDayForAssignment(assignment, schedule).topic == name;
}

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, schedule }) => {
  const { colorMode } = useColorMode();
  const week = schedule.weeks[weekNumber];
  const assignments = schedule.assignments;

  return (
    <Container
      mb={8}
      background={colorMode == "light" ? "white" : "gray.900"}
      shadow="md"
      p={6}
    >
      <VStack align="start" spacing={2}>
        <Stack direction={["row"]} spacing={8} align="center" mb={4}>
          <FirstWeekCol>Week {weekNumber}</FirstWeekCol>
          <Box>
            <Text textStyle="subtitle3">{week.topic}</Text>
          </Box>
        </Stack>
        {week.lessons.map((lesson, lessonIdx) => {
          const weekAttachnments = [];

          if (lesson.recordingLink) {
            weekAttachnments.push(
              <ChakraLink
                color="red"
                mr={3}
                href={lesson.readingLink}
                isExternal
              >
                <BsRecordFill style={{ marginBottom: "-2px" }} /> Recording
              </ChakraLink>
            );
          }

          if (lesson.readingTitle) {
            weekAttachnments.push(
              <ChakraLink color="blue" mr={3} as={Link} to={lesson.readingLink}>
                <HiOutlineBookOpen style={{ marginBottom: "-2px" }} />{" "}
                {lesson.readingTitle} Reading
              </ChakraLink>
            );
          }

          return (
            <VStack spacing={2} align="start" key={lessonIdx}>
              {lessonIdx !== 0 && (
                <Center position="relative" width="100%">
                  <Divider my={3} />
                </Center>
              )}
              <Stack direction={["row"]} spacing={8} align="start">
                <FirstWeekCol>
                  <Text textStyle="label1">{lesson.date}</Text>
                  {/* <Text textStyle="label2">Instructor TBA</Text> */}
                </FirstWeekCol>
                <VStack spacing={1} align="start">
                  <Text textStyle="label1">
                    <Text as="span" fontWeight="400">
                      Lecture {weekNumber * 2 + lessonIdx + 1}
                    </Text>{" "}
                    / {lesson.topic}
                  </Text>
                  <Text textStyle="label2">
                    {weekAttachnments.length ? weekAttachnments : "\u2E3A"}
                  </Text>
                </VStack>
              </Stack>
              {assignments
                .filter((assignment) =>
                  isDueDateForAssignment(lesson.topic, assignment, schedule)
                )
                .map((assignment, i) => (
                  <Stack direction={["row"]} spacing={8} align="start" key={i}>
                    <FirstWeekCol>
                      <Text textStyle="label2">Due</Text>
                    </FirstWeekCol>
                    <Box>
                      <AssignmentLink assignment={assignment} />
                    </Box>
                  </Stack>
                ))}
              {assignments
                .filter((assignment) => assignment.assigned == lesson.topic)
                .map((assignment, i) => (
                  <Stack direction={["row"]} spacing={8} align="start" key={i}>
                    <FirstWeekCol>
                      <Text textStyle="label2">Assigned</Text>
                    </FirstWeekCol>
                    <VStack spacing="2px" align="start">
                      <AssignmentLink assignment={assignment} />
                      <Text
                        textStyle="label2"
                        fontSize="sm"
                        my={0}
                        color="gray.400"
                        fontWeight="400"
                      >
                        Due{" "}
                        {assignment.due == 1
                          ? "next class"
                          : assignment.due == 2
                          ? "next week"
                          : dueDayForAssignment(assignment, schedule).date}
                      </Text>
                    </VStack>
                  </Stack>
                ))}
            </VStack>
          );
        })}
      </VStack>
    </Container>
  );
};

export default WeekCard;
