import React from 'react';
import { Box, Flex, Text, Link, Button } from '@chakra-ui/react';

const recruitingAnnouncement = (
  <Box>
    <Text textStyle="body" mb={6}>
      Welcome to the{' '}
      <Text as="span" fontWeight="bold">
        Introduction to Full Stack Development DeCal
      </Text>
      ! If you&apos;re interested in learning the skills needed to tackle the
      technology side of efforts like starting a new business, breaking into the
      tech industry, and creating cool products that live on the internet,
      you&apos;re in the right place! In this course you&apos;ll gain
      familiarity and practice using industry-standard development and design
      technologies such as JavaScript, React.js, Node.js, Figma, MongoDB,
      Express, AWS, HTML/CSS, and much more!
      <br />
      <br />
      To learn more about the DeCal, please attend one of our infosessions! We
      have our{' '}
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
      . Both infosessions are held over zoom, and zoom links can be found at the
      linked Facebook events. Make sure to mark &quot;Going&quot; or
      &quot;Interested&quot; on the facebook events to receieve reminders about
      each infosession!
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
      . Applications are due at 11:59:59pm pacific time on January 30th, and we
      plan to have our first class on Febuary 3rd. For more information such as
      infosession links, the link to our interest form, and more information
      about WDB, check out the{' '}
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
      page. You can also find a course schedule, including the topics we cover,
      below.
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
        href="https://berkeley.zoom.us/rec/play/wyc5m8nybRmtaDBd5LRI7YGOokmxRw6iGchFYQcuoh2kFtjcO1Nm9sgUIGVZrGKGtlHFt9xmyBvqmiI.ktVnNi2Jlj5YKiQX?startTime=1643080239000"
        variant="button"
        isExternal
      >
        <Button variant="blue" minW="20rem">
          DeCal Infosession 1 Zoom Recording
        </Button>
      </Link>
      <Link
        href="https://docs.google.com/presentation/d/16Kq4RvS5ccCTlzSR-Kq-ZTpY4x9CNYLQqnvcBvnxk20/edit?usp=sharing"
        variant="button"
        isExternal
      >
        <Button variant="orange" minW="20rem">
          DeCal Infosession Slides
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
);

export default recruitingAnnouncement;
