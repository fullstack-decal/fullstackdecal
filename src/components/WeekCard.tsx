/**
 * WeekCard component
 *
 * The WeekCard component displays a single week of a course schedule.
 *
 * @example
 * <WeekCard weekNumber={1} schedule={schedule} />
 *
 * @param {WeekCardProps} props - The component props.
 * @returns {JSX.Element} The WeekCard component.
 *
 * How the schedule data is used in the WeekCard component:
 *
 * The WeekCard component uses the schedule data to display the week topic, lessons, and assignments. The schedule data is an object with three properties: weeks, assignments, and year. The weeks property is an array of week objects, each containing a topic and an array of lesson objects. The assignments property is an array of assignment objects, each containing a name, assigned topic, link, due date, and late date.
 *
 * The WeekCard component uses the weekNumber prop to index into the weeks array and retrieve the corresponding week object. It then uses the lessons array of the week object to display the lesson topics, dates, and reading links. The component also uses the assignments array to display the assignments that are due or assigned during the week.
 *
 * @example
 * const schedule: Schedule = {
 *   weeks: [
 *     {
 *       topic: "Welcome to the course!",
 *       lessons: [
 *         {
 *           date: "M 20",
 *           topic: "Course Introduction",
 *           readingTitle: "Introduction",
 *           readingLink: "/docs/Lessons/Lesson1",
 *         },
 *       ],
 *     },
 *   ],
 *   assignments: [
 *     {
 *       name: "Vitamin 1: HTML",
 *       assigned: "HTML",
 *       link: "/docs/Assignments/Vitamins/Vitamin1",
 *       due: 5,
 *       late: 7,
 *     },
 *   ],
 *   year: 2024,
 * };
 *
 * <WeekCard weekNumber={1} schedule={schedule} />
 */

import React from "react";
import { Schedule, Assignment } from "../types";
import { HiOutlineBookOpen } from "react-icons/hi";
import { CgPill } from "react-icons/cg";
import { RiFilePaper2Fill } from "react-icons/ri";
import {
  Stack,
  VStack,
  Container,
  Box,
  Text,
  Divider,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";

interface WeekCardProps {
  /**
   * The week number to display.
   */
  weekNumber: number;
  /**
   * The course schedule.
   */
  schedule: Schedule;
  [x: string]: any;
}

/**
 * Converts a string date to a Date object.
 * Sets the year to the current year.
 *
 * @param {string} dateStr - The date string to convert.
 * @returns {Date} The converted Date object.
 */
function stringToDate(dateStr: string): Date {
  const dateObj = new Date(dateStr);
  dateObj.setFullYear(new Date().getFullYear());
  return dateObj;
}

/**
 * Converts a Date object to a string in the format "Day, Month Date".
 *
 * @param {Date} date - The Date object to convert.
 * @returns {string} The converted date string.
 */
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
    "Oct",
    "Nov",
    "Dec",
  ][month];

  return `${dayStr}, ${monthStr} ${date.getDate()}`;
}

/**
 * Returns a relative date string for the given date compared to the reference date.
 * For example, "tomorrow", "next week", or "Monday".
 *
 * @param {Date} date - The date to convert.
 * @param {Date} referenceDate - The reference date to compare to.
 * @returns {string} The relative date string.
 */
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

/**
 * Adds the specified number of days to the given date.
 *
 * @param {Date} startDay - The starting date.
 * @param {number} daysToAdd - The number of days to add.
 * @returns {Date} The resulting date.
 */
function addDays(startDay: Date, daysToAdd: number): Date {
  const newDate = new Date(startDay);
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

/**
 * A component that displays the first column of the week card.
 *
 * @param {React.ReactNode} children - The content to display.
 * @returns {JSX.Element} The first column component.
 */
const FirstWeekCol: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => (
  <Box width={["5rem", "7rem"]} flex="0 0 auto" textAlign="right" {...props}>
    {children}
  </Box>
);

/**
 * A component that displays an assignment link.
 *
 * @param {Assignment} assignment - The assignment to display.
 * @returns {JSX.Element} The assignment link component.
 */
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

/**
 * A component that displays an assignment list item.
 *
 * @param {Assignment} assignment - The assignment to display.
 * @param {string} type - The type of assignment (e.g. "Due", "Late", "Assigned").
 * @param {string} [subtext] - Optional subtext to display.
 * @returns {JSX.Element} The assignment list item component.
 */
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

/**
 * Returns the due date for the given assignment.
 *
 * @param {Assignment} assignment - The assignment to get the due date for.
 * @param {Schedule} schedule - The course schedule.
 * @returns {Date} The due date for the assignment.
 */
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

/**
 * Returns the late due date for the given assignment.
 *
 * @param {Assignment} assignment - The assignment to get the late due date for.
 * @param {Schedule} schedule - The course schedule.
 * @returns {Date} The late due date for the assignment.
 */
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

/**
 * Returns whether the given date is the due date for the given assignment.
 *
 * @param {string} date - The date to check.
 * @param {Assignment} assignment - The assignment to check.
 * @param {Schedule} schedule - The course schedule.
 * @returns {boolean} Whether the date is the due date for the assignment.
 */
function isDueDateForAssignment(
  date: string,
  assignment: Assignment,
  schedule: Schedule
) {
  return dateToString(dueDayForAssignment(assignment, schedule)) == date;
}

/**
 * Returns whether the given date is the late due date for the given assignment.
 *
 * @param {string} date - The date to check.
 * @param {Assignment} assignment - The assignment to check.
 * @param {Schedule} schedule - The course schedule.
 * @returns {boolean} Whether the date is the late due date for the assignment.
 */
function isLateDueDateForAssignment(
  date: string,
  assignment: Assignment,
  schedule: Schedule
) {
  return dateToString(lateDueDayForAssignment(assignment, schedule)) == date;
}

/**
 * The WeekCard component displays a single week of a course schedule.
 *
 * @param {WeekCardProps} props - The component props.
 * @returns {JSX.Element} The WeekCard component.
 */
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
                .map((assignment) => (
                  <AssignmentList assignment={assignment} type="Due" />
                ))}
              {assignments
                .filter((assignment) =>
                  isLateDueDateForAssignment(lesson.date, assignment, schedule)
                )
                .map((assignment) => (
                  <AssignmentList assignment={assignment} type="Late" />
                ))}
              {assignments
                .filter((assignment) => assignment.assigned == lesson.topic)
                .map((assignment) => (
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
