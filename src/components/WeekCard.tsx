import React from "react";
import { Week, Lesson } from "../types";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsRecordFill } from "react-icons/bs";
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
  Link as ChakraLink,
  LightMode,
} from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";

type WeekCardProps = {
  weekNumber: number;
  week: Week;
};

const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, week }) => {
  const { colorMode } = useColorMode();

  return (
    <Container
      mb={8}
      background={colorMode == "light" ? "white" : "gray.900"}
      shadow="md"
      p={6}
    >
      <VStack spacing={4} align="start">
        <Stack direction={["row"]} spacing={8} align="center">
          <Box width="10rem">Week {weekNumber}</Box>
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
            <>
              {lessonIdx !== 0 && <Divider />}
              <Stack direction={["row"]} spacing={8} align="center">
                <Box width="10rem">
                  <Text textStyle="label1">{lesson.date}</Text>
                  <Text textStyle="label2">Instructor TBA</Text>
                </Box>
                <Box>
                  <Text textStyle="label1">
                    <Text as="span" fontWeight="400">
                      Lecture {weekNumber * 2 + lessonIdx + 1}
                    </Text>{" "}
                    / {lesson.topic}
                  </Text>
                  <Text textStyle="label2">
                    {weekAttachnments.length ? weekAttachnments : "\u2E3A"}
                  </Text>
                </Box>
              </Stack>
            </>
          );
        })}
      </VStack>
    </Container>
  );
};

export default WeekCard;
