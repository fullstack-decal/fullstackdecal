import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import week0 from './recruitingAnnouncement';

const announcements = [
  week0,
  <Box key={1}>
    <Text textStyle="body" mb={6}>
      Thank you for applying to the Full-Stack DeCal! Decisions have been sent
      out so, make sure to check your email! If you were offered a spot in the
      DeCal and chose to accept, please attend our first class on Thursday,
      February 3rd, 6:30pm - 8pm, in the Physics 1 classroom. If you&apos;re not
      enrolled but would still like to come to the class, feel free to do so!
      <br />
      <br />
      <Text fontWeight="bold">
        To those who weren&apos;t offered a spot in the DeCal:
      </Text>
      Hopefully this explanation of why we limit of our class size can provide
      some context into why we have to be a selective course this semester.
      <br />
      <br />
      We don&apos;t want to limit enrollment (which is why we&apos;ve doubled
      class size since last semester, and are planning to ideally double it
      again next semester). The biggest constant we have on people we take is
      the size of our course staff, because grading homework takes a LOT of time
      especially for web dev which isn&apos;t easy to create autograders for. We
      also commonly get feedback about the DeCal being pretty difficult, so we
      want to make sure we can hold a proportional number of Office Hours so
      instead of serving 200 students poorly we can properly support and teach
      100 students. Nobody wants 10-hour long OH queues, especially for a DeCal.
      <br />
      <br />
      To counter this issue we make ALL materials public on our course website
      (schedule, readings, homework, lectures) so it&apos;s as easy to follow
      along as possible. The course website is fullstackdecal.com. I know it
      isn&apos;t a substitute for the pressure and community for a class, but we
      hope this at least makes learning the material simpler and more
      straightforward/structured. We&apos;ve had people go through our
      curriculum by themselves and have told us that they learned a lot, so
      hopefully self-learning the material can help!
    </Text>
  </Box>,
  <Box key={1}>
    <Text textStyle="body" mb={6}>
      <Text as="span" fontWeight="bold">Lecture 1 - Feb 8, Tuesday 6:30-8PM, Physics 1:</Text>
      <br />
      Get ready to learn HTML!!!
      <br />
      <br />
      <Text as="span" textDecoration="underline">Reading, Slides, and Homework links can be found below.</Text>
      <br />
      Homework 0 - Getting Started  is due Tuesday, Feb 8.
      <br />
      Homework 1 - HTML  is due Tuesday, Feb 15.
    </Text>
    <Text textStyle="body" mb={6}>
    <Text as="span" fontWeight="bold">Lecture 2 - Feb 10, Thursday 6:30-8PM, Physics 1:</Text>
      <br />
      WOOHOO it is CSS time! Let&apos;s style it up!
      <br />
      <br />
      <Text as="span" textDecoration="underline">Reading, Slides, and Homework links can be found below.</Text>
      <br />
      Homework 1 - HTML  is due Tuesday, Feb 15.
      <br />
      Homework 2 - CSS  is due Tuesday, Feb 18.
    </Text>
    <Text textStyle="body" mb={6}>
      ALSO - Adding courses on Calcentral deadline is Feb 9th! If you are having any trouble enrolling this decal, do make a private post and we will respond ASAP.
      <br />
      <br />
      If you need assignment extensions, please make a private message, but we urge you to keep up with assignments early! Have a great week everyone :)
    </Text>
  </Box>
];

export default announcements;
