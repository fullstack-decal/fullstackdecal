/**
 * Introduction
 *
 * This is the main entry point of the project, responsible for rendering the home page.
 * It uses the Schedule component to display the course schedule and the WeekCard component to display each week's information.
 *
 * The Schedule component is located in the `data/schedule.ts` file and contains the course schedule data.
 * The WeekCard component is located in the `components/WeekCard.tsx` file and is responsible for rendering a single week's information.
 *
 * To maintain and update the code, you can modify the schedule data in the `data/schedule.ts` file.
 * You can also update the WeekCard component to change the way each week's information is displayed.
 *
 * @example
 * To add a new week to the schedule, simply add a new object to the `weeks` array in the `data/schedule.ts` file.
 * To update the WeekCard component, modify the `WeekCard.tsx` file.
 */

import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WeekCard from "../components/WeekCard";
import schedule from "../data/schedule";
import {
  VStack,
  Image,
  Container,
  Box,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import fullStackLogoPath from "@site/static/img/logo.png";
import { useColorMode } from "@docusaurus/theme-common";

/**
 * HomeContent component
 *
 * This component renders the home page content, including the course title, schedule, and WeekCard components.
 *
 * @returns {JSX.Element} The home page content.
 */
const HomeContent: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        background={(colorMode == "light"
          ? [
              "radial-gradient(circle 40vw at 0px 700px, #dbc1ffa1, transparent)",
              "radial-gradient(circle 40vw at 50% 600px, #ffe2fbcf, transparent)",
              "radial-gradient(circle 40vw at 70% 800px, #7ad4d333, transparent)",
              "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
            ]
          : [
              "radial-gradient(circle 40vw at 0px 700px, #4e169c78, transparent)",
              "radial-gradient(circle 40vw at 50% 600px, #46063d85, transparent)",
              "radial-gradient(circle 40vw at 70% 800px, #0020209c, transparent)",
              "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
            ]
        ).join(", ")}
      >
        <Container maxW="container.md" my="6rem">
          <Text textStyle="subtitle2" color="blackAlpha.500">
            CS 198-99 | Spring 24
          </Text>
          <Text textStyle="title1">
            Introduction
            <br />
            to <Image src={fullStackLogoPath} height="1em" mr={4} mb={-4} />
            <span style={{ color: "#0FD3FF" }}>full-stack</span>
            <br />
            development
          </Text>
          <Text textStyle="subtitle2" color="blackAlpha.500">
            Mon and Wed, 6:30-8:00 PM, Physics 4
          </Text>

          <Link
            href="mailto:webdev-decal@lists.berkeley.edu"
            isExternal
            textStyle="subtitle2"
            color="blackAlpha.500"
          >
            webdev-decal@lists.berkeley.edu
          </Link>
        </Container>

        {schedule.weeks.map((week, index) => {
          return (
            <WeekCard weekNumber={index} schedule={schedule} key={index} />
          );
        })}
      </Box>
    </>
  );
};

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="fullStackHero"
    >
      <HomeContent />
    </Layout>
  );
};

export default Home;
