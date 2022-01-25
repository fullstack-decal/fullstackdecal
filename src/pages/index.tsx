import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WeekCard from '../components/WeekCard';
import SetsUsApart from '../components/SetsUsApart';
import schedule from '../data/schedule';
import { Container, Box, Flex, Text, Link, Button } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box
        // h={['100vh', '110vh', '105vh', '120vh']}
        backgroundImage={[
          '/img/background-mobile.png',
          null,
          '/img/background.png'
        ]}
        backgroundSize="100% 100%"
      >
        <Container maxW="container.lg">
          <Text
            textStyle="label1"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            pt={[10, 16]}
            mb={3}
          >
            CS 198-099&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;SPRING 22
          </Text>
          <Text
            textStyle="title2"
            color="transparent"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            mb={[2, 0]}
            sx={{ WebkitTextStroke: '2px white' }}
          >
            INTRODUCTION TO
          </Text>
          <Text textStyle="title1" color="white">
            FULL STACK
            <br />
            DEVELOPMENT
          </Text>
          <Text
            textStyle="label1"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            mt={2}
            mb={[8, 12]}
          >
            Tuesday & Thursday, 6:30pm -
            8:00pm&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Physics 1
            Classroom
          </Text>
          <Text textStyle="body2" color="white" mb={[6, 8]}>
            Welcome to{' '}
            <Link
              href="https://webatberkeley.org/"
              textDecoration="underline"
              isExternal
            >
              Web Development at Berkeley&apos;s
            </Link>{' '}
            <Text as="span" fontWeight="bold">
              Introduction to Full Stack Development!
            </Text>{' '}
            In this course, we cover the basics of web development, how the
            internet works, and the frameworks, technologies, and best practices
            that are used in the industry today. No prior CS experience is
            required to participate and succeed in this course, but we do
            acknowledge that we cover a fairly large amount of material and that
            this course can feel like a lot, even for those with past CS
            experience.
          </Text>
          <Text textStyle="body2" color="white" pb={56}>
            The materials in this course have been made available to the public
            in pursuit of reaching, educating, and supporting as many people as
            we can.
          </Text>
        </Container>
      </Box>
      <Container maxW="container.lg" pb={16}>
        <Text textStyle="title2" color="purple" mt={[8, 16]} mb={4}>
          Announcements
        </Text>
        <Box mb={16}>
          <Text textStyle="subtitle2" fontSize="3xl" mb={4}>
            Week 0
          </Text>
          <Text textStyle="body" mb={6}>
            Welcome to the{' '}
            <Text as="span" fontWeight="bold">
              Introduction to Full Stack Development DeCal
            </Text>
            ! If you&apos;re interested in learning the skills needed to tackle
            the technology side of efforts like starting a new business,
            breaking into the tech industry, and creating cool products that
            live on the internet, you&apos;re in the right place! In this course
            you&apos;ll gain familiarity and practice using industry-standard
            development and design technologies such as JavaScript, React.js,
            Node.js, Figma, MongoDB, Express, AWS, HTML/CSS, and much more!
            <br />
            <br />
            To learn more about the DeCal, please attend one of our
            infosessions! We have our{' '}
            <Link
              href="https://www.facebook.com/events/348063700170538/"
              textDecoration="underline"
              isExternal
            >
              first infosession on January 24th
            </Link>{' '}
            and our{' '}
            <Link
              href="https://www.facebook.com/events/224636553192406/"
              textDecoration="underline"
              isExternal
            >
              second infosession on January 26th
            </Link>
            . Both infosessions are held over zoom, and zoom links can be found
            at the linked Facebook events. Make sure to mark &quot;Going&quot;
            or &quot;Interested&quot; on the facebook events to receieve
            reminders about each infosession!
            <br />
            <br />
            If you plan to apply, you can find this DeCal&apos;s application at{' '}
            <Link
              href="https://forms.gle/uw6P28m7eicTeDm47"
              textDecoration="underline"
              isExternal
            >
              this link
            </Link>
            . Applications are due at 11:59:59pm pacific time on January 30th,
            and we plan to have our first class on Febuary 3rd. For more
            information such as infosession links, the link to our interest
            form, and more information about WDB, check out the{' '}
            <Link
              href="https://webatberkeley.org/join"
              textDecoration="underline"
              isExternal
            >
              WDB website
            </Link>
            . Please direct all questions about applying and the DeCal to
            webatberkeley@gmail.com.
            <br />
            <br />
            To learn more about the course, please check out our{' '}
            <Link href="/course-policies" textDecoration="underline">
              course policies
            </Link>{' '}
            page. You can also find a course schedule, including the topics we
            cover, below.
          </Text>
          <Flex direction="column" gap={4}>
            <Link
              href="https://forms.gle/K1iAuhezGSMTUfKb7"
              variant="button"
              isExternal
            >
              <Button variant="pink" minW="20rem">
                DeCal Interest Form
              </Button>
            </Link>
            <Link
              href="https://www.facebook.com/events/348063700170538/"
              variant="button"
              isExternal
            >
              <Button variant="blue" minW="20rem">
                DeCal Infosession 1 FB Event
              </Button>
            </Link>
            <Link
              href="https://www.facebook.com/events/224636553192406/"
              variant="button"
              isExternal
            >
              <Button variant="orange" minW="20rem">
                DeCal Infosession 2 FB Event
              </Button>
            </Link>
            <Link
              href="https://forms.gle/uw6P28m7eicTeDm47"
              variant="button"
              isExternal
            >
              <Button variant="purple" minW="20rem">
                DeCal Application
              </Button>
            </Link>
          </Flex>
        </Box>

        {/* What Sets Us Apart Section */}
        <SetsUsApart />

        <Text textStyle="title2" color="purple" mb={8}>
          Course Overview
        </Text>
        <Flex direction="column" gap={7}>
          <>
            {Array(13)
              .fill(0)
              .map((_, index) => {
                const weekLessons = schedule.filter(
                  (lesson) => lesson.week === index
                );

                return (
                  <WeekCard
                    weekNumber={index}
                    lessons={weekLessons}
                    key={index}
                  />
                );
              })}
          </>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
