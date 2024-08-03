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
  const isVitamin = assignment.type == "Vitamin";

  const icon = isVitamin ? (
    <CgPill style={{ marginBottom: "-2px" }} />
  ) : (
    <RiFilePaper2Fill style={{ marginBottom: "-2px" }} />
  );
  const color = isVitamin ? "purple" : "pink";
  return (
    <Text textStyle="label1">
      <ChakraLink color={color} mr={3} as={Link} to={assignment.link.link}>
        {icon} {assignment.link.name}
      </ChakraLink>
    </Text>
  );
};

/**
 * A component that displays an assignment list item.
 *
 * @param {Assignment} assignment - The assignment to display.
 * @param {string} type - The type of assignment (e.g. "Due", "Assigned").
 * @param {Date} startDate - Start date of the schedule used to calculate dates (assigned/due) for the assignment.
 * @returns {JSX.Element} The assignment list item component.
 */
const AssignmentList: React.FC<{
  type: "Due" | "Assigned";
  assignment: Assignment;
  startDate: Date;
}> = ({ assignment, type, startDate }) => {
  const assignmentDueDate = new Date(startDate);
  assignmentDueDate.setDate(
    assignmentDueDate.getDate() + assignment.dueWeek * 7 + assignment.dueDay,
  );

  return (
    <Stack direction={["row"]} spacing={8} align="start">
      <FirstWeekCol>
        <Text textStyle="label2">{type}</Text>
      </FirstWeekCol>
      <div>
        <AssignmentLink assignment={assignment} />
        <span
          style={{
            fontSize: "14px",
            color: "#A0AEC0",
            margin: "0",
            marginTop: "2px",
          }}
        >
          {`Due ${formatDate(assignmentDueDate)}`}
        </span>
      </div>
    </Stack>
  );
};

// Used to format dates in Day, Month Day format- ex: Mon, Sept 16
const formatDate = (date: Date) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
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
  ];

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
};

// used to find the specific assignments that are assigned/due for a spceific week index, and resolves the frontend component views. The output to is function is straight up the components themselves that are rendered in each specific week card component.
const resolveAssignmentsForWeek = (
  assignments: Assignment[],
  weekNumber: number,
  startDate: Date,
) => {
  let assignmentComponents = assignments
    .filter((assignment) => assignment.assignedWeek == weekNumber)
    .map((assignment) => (
      <AssignmentList
        assignment={assignment}
        type="Assigned"
        startDate={startDate}
      />
    ))
    .concat(
      assignments
        .filter((assignment) => assignment.dueWeek == weekNumber)
        .map((assignment) => (
          <AssignmentList
            assignment={assignment}
            type="Due"
            startDate={startDate}
          />
        )),
    );

  for (const assignment of assignments) {
    const checkpoints = assignment.checkpoints;
    if (checkpoints) {
      assignmentComponents = assignmentComponents.concat(
        checkpoints
          .filter((checkpoint) => checkpoint.dueWeek == weekNumber)
          .map((checkpoint) => (
            <AssignmentList
              assignment={checkpoint}
              type="Due"
              startDate={startDate}
            />
          )),
      );
    }
  }

  return assignmentComponents;
};

/**
 * The WeekCard component displays a single week of a course schedule.
 *
 * @param {WeekCardProps} props - The component props.
 * @returns {JSX.Element} The WeekCard component.
 */
const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, schedule }) => {
  const { colorMode } = useColorMode();
  const week = schedule.weeks[weekNumber];
  const sortedLessonDays = [...schedule.lessonDays].sort();
  const currentWeek = new Date(schedule.startDate);
  currentWeek.setDate(currentWeek.getDate() + weekNumber * 7);
  const vitamins = resolveAssignmentsForWeek(
    schedule.vitamins,
    weekNumber,
    schedule.startDate,
  );
  const projects = resolveAssignmentsForWeek(
    schedule.projects,
    weekNumber,
    schedule.startDate,
  );
  const numberOfAssignments = vitamins.length + projects.length;

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
            <Text textStyle="subtitle3">{week.title}</Text>
          </Box>
        </Stack>
        {week.lessons.map((lesson, lessonIdx) => {
          const weekAttachnments = [];
          const lessonDate = new Date(currentWeek);
          lessonDate.setDate(
            lessonDate.getDate() +
              sortedLessonDays[lessonIdx % sortedLessonDays.length],
          );

          if (lesson.reading) {
            for (const reading of lesson.reading) {
              weekAttachnments.push(
                <Text textStyle="label2">
                  {" "}
                  <ChakraLink color="blue" mr={3} as={Link} to={reading.link}>
                    <HiOutlineBookOpen style={{ marginBottom: "-2px" }} />{" "}
                    {reading.name} Reading
                  </ChakraLink>
                </Text>,
              );
            }
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
                  <Text textStyle="label1">{formatDate(lessonDate)}</Text>
                  {/* <Text textStyle="label2">Instructor TBA</Text> */}
                </FirstWeekCol>
                <VStack spacing={1} align="start">
                  <Text textStyle="label1">
                    <Text as="span" fontWeight="400">
                      Lecture {weekNumber * 2 + lessonIdx + 1}
                    </Text>{" "}
                    / {lesson.topic}
                  </Text>
                  {weekAttachnments.length ? (
                    weekAttachnments
                  ) : (
                    <Text textStyle="label2">{"\u2E3A"}</Text>
                  )}
                </VStack>
              </Stack>
            </VStack>
          );
        })}
        {week.lessons.length > 0 && numberOfAssignments > 0 && (
          <Center position="relative" width="100%">
            <Divider my={3} width="100%" />
          </Center>
        )}
        {projects}
        {vitamins}
      </VStack>
    </Container>
  );
};

export default WeekCard;
