import React from "react";
import { Schedule, Assignment, Lesson } from "../types";
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

function stringToDate(dateStr: string): Date {
  const dateObj = new Date(dateStr);
  dateObj.setFullYear(new Date().getFullYear());
  return dateObj;
}

function dateToString(date: Date): string {
  const day = date.getDay();
  const dayStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day];
  const month = date.getMonth();
  const monthStr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ][month];

  return `${dayStr}, ${monthStr} ${date.getDate()}`;
}

function relDateToString(date: Date, referenceDate: Date): string {
  const daysBetweenDates: number = Math.round(
    (date.getTime() - referenceDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (daysBetweenDates == 1) {
    return "tomorrow";
  } else if (daysBetweenDates == 7) {
    return "next week";
  } else if (daysBetweenDates < 7) {
    return [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ][date.getDay()];
  } else {
    return dateToString(date);
  }
}

function addDays(startDay: Date, daysToAdd: number): Date {
  const newDate = new Date(startDay);
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

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

const AssignmentList: React.FC<{
  type: string;
  assignment: Assignment;
  subtext?: string;
}> = ({ assignment, subtext, type }) => (
  <Stack direction={["row"]} spacing={8} align="start">
    <FirstWeekCol>
      <Text textStyle="label2">{type}</Text>
    </FirstWeekCol>
    <div>
      <AssignmentLink assignment={assignment} />
      {subtext && (
        <span
          style={{
            fontSize: "14px",
            color: "#A0AEC0",
            margin: "0",
            marginTop: "2px",
          }}
        >
          {subtext}
        </span>
      )}
    </div>
  </Stack>
);

function dueDayForAssignment(assignment: Assignment, schedule: Schedule): Date {
  const lessonList = schedule.weeks.flatMap((week) => week.lessons);
  const lessonNameList = schedule.weeks.flatMap((week) =>
    week.lessons.map((lesson) => lesson.topic)
  );
  const assignedLessonNo = lessonNameList.indexOf(assignment.assigned);
  const assignedLesson = lessonList[assignedLessonNo];

  const assignedDate = stringToDate(assignedLesson.date);
  return addDays(assignedDate, assignment.due);
}

function lateDueDayForAssignment(
  assignment: Assignment,
  schedule: Schedule
): Date {
  const lessonList = schedule.weeks.flatMap((week) => week.lessons);
  const lessonNameList = schedule.weeks.flatMap((week) =>
    week.lessons.map((lesson) => lesson.topic)
  );
  const assignedLessonNo = lessonNameList.indexOf(assignment.assigned);
  const assignedLesson = lessonList[assignedLessonNo];

  const assignedDate = stringToDate(assignedLesson.date);
  return addDays(assignedDate, assignment.late);
}

function isDueDateForAssignment(
  date: string,
  assignment: Assignment,
  schedule: Schedule
) {
  return dateToString(dueDayForAssignment(assignment, schedule)) == date;
}

function isLateDueDateForAssignment(
  date: string,
  assignment: Assignment,
  schedule: Schedule
) {
  return dateToString(lateDueDayForAssignment(assignment, schedule)) == date;
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
      <VStack align="stretch" spacing={2}>
        <Stack direction={["row"]} spacing={8} align="center" mb={4}>
          <FirstWeekCol>Week {weekNumber}</FirstWeekCol>
          <Box>
            <Text textStyle="subtitle3">{week.topic}</Text>
          </Box>
        </Stack>
        {week.lessons.map((lesson, lessonIdx) => {
          const weekAttachnments = [];

          // if (lesson.recordingLink) {
          //   weekAttachnments.push(
          //     <ChakraLink
          //       color="red"
          //       mr={3}
          //       hrgef={lesson.readingLink}
          //       isExternal
          //     >
          //       <BsRecordFill style={{ marginBottom: "-2px" }} /> Recording
          //     </ChakraLink>
          //   );
          // }

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
                  <Divider my={3} width="100%" />
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
                  isDueDateForAssignment(lesson.date, assignment, schedule)
                )
                .map((assignment, i) => (
                  <AssignmentList assignment={assignment} type="Due" />
                ))}
              {assignments
                .filter((assignment) =>
                  isLateDueDateForAssignment(lesson.date, assignment, schedule)
                )
                .map((assignment, i) => (
                  <AssignmentList assignment={assignment} type="Late" />
                ))}
              {assignments
                .filter((assignment) => assignment.assigned == lesson.topic)
                .map((assignment, i) => (
                  <AssignmentList
                    assignment={assignment}
                    type="Assigned"
                    subtext={
                      "Due " +
                      relDateToString(
                        dueDayForAssignment(assignment, schedule),
                        stringToDate(lesson.date)
                      )
                    }
                  />
                ))}
            </VStack>
          );
        })}
      </VStack>
    </Container>
  );
};

export default WeekCard;
