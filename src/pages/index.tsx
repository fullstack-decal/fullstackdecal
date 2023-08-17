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
            ]
          : [
              "radial-gradient(circle 40vw at 0px 700px, #4e169c78, transparent)",
              "radial-gradient(circle 40vw at 50% 600px, #46063d85, transparent)",
              "radial-gradient(circle 40vw at 70% 800px, #0020209c, transparent)",
            ]
        ).join(", ")}
      >
        <Container maxW="container.md" my="6rem">
          <Text textStyle="subtitle2" color="blackAlpha.500">
            CS 198-99 | Spring 23
          </Text>
          <Text textStyle="title1">
            Introduction
            <br />
            to <Image src={fullStackLogoPath} height="1em" mr={4} mb={-4} />
            <span style={{ color: "#0FD3FF" }}>full-stack</span>
            <br />
            development
          </Text>
        </Container>

        {schedule.map((week, index) => {
          return <WeekCard weekNumber={index} week={week} key={index} />;
        })}
      </Box>
      <Container maxW="container.lg" pb={16} className="darkModeContainer">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=WEEK&src=Y18xanJ0a21hbzN2ajhmN3NjYXJydDUxZWdpY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441"
          style={{
            // border: "solid 1px #777",
            width: "80%",
            height: "600px",
            // frameborder: "0",
            // scrolling: "no"
          }}
        />
      </Container>
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
