import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const SetsUsApart: React.FC = () => {
  return (
    <>
      <Text textStyle="title2" color="purple" mt={16} mb={4}>
        What Sets Us Apart?
      </Text>
      <Box mb={16}>
        <Text textStyle="body">
          We get this question a lot, especially in regrdance to CS 169, the Web
          Development and Design DeCal, and the Cubstart DeCal, so we decided to
          answer it here!
          <br /> <br />
          Before delving into other programs, one major facet that sets us apart
          is the breadth of speakers we bring in. up to a third of our lectures
          are taught by guest speakers from the industry, and we routinely have
          speakers from top tech companies like Tesla, Facebook, and Google,
          alongside speakers from exciting startups like Cruise, Brex, and
          Retool who come to teach our students about these technologies in
          addition to offering theit time answering questions about the industry
          and life after college.
          <br /> <br />
          One last fundamental difference is that we treat this DeCal as a
          recruiting pipeline into WDB, the club that runs the DeCal. If
          you&apos;re interested in joining WDB but don&apos;t have the
          requisite exprience, the DeCal is a great way to learn what you need
          to know before applying!
          <br /> <br />
          If you&apos;re confused as to which course to apply to or take, feel
          free to email webatberkeley@gmail.com with your questions!
        </Text>
        <Text textStyle="subtitle2" fontSize="3xl" my={4}>
          CS 169
        </Text>
        <Text textStyle="body">
          There are a lot of differences between this DeCal and CS 169. While
          both classes teach software engineering, they differ drastically in
          their approach and content. This DeCal covers HTML/CSS, JavaScript,
          React, Node, Express, MongoDB, Figma, and AWS + some other random
          technologies. On the other hand, CS 169 mostly uses Rails and Ruby,
          which I consider outdated in the industry, especially when compared to
          the technologies we teach in this DeCal. In terms of approach, CS 169
          tends to dive much deeper into auxiliary topics such as project
          management and testing, while this DeCal prefers to spend its time
          diving deeper into the technologies we teach as well as focusing more
          on developing multiple projects and building cool SaaS products. There
          is a little bit of overlap between the two, but that only comes out to
          about ~ 2 weeks worth of content out of the 12 weeks of the course.
        </Text>
        <Text textStyle="subtitle2" fontSize="3xl" my={4}>
          Cubstart DeCal
        </Text>
        <Text>
          Before this semester, Cubstart focused more on flask, firebase, and
          other technologies, so there wasn&apos;t a huge overlap between the
          two. There were some similar base topics, but overall they taught
          different technologies. They revamped their curriculum this semester,
          however, and now the two curriculums are very similar. One difference,
          however, is that our curriculum includes lessons to teach students
          about cloud technologies and DevOps.
          <br /> <br />
          One of the biggest differentiating factors is our age. We&apos;ve been
          teaching this curriculum for 4 semesters (2 as an internal education
          program, 2 as a DeCal now), so our material is very fleshed out and
          tested. Because of this we have a very comprehensive set of readings,
          one for each lecture, that serve as a de facto textbook. In fact,
          we&apos;re planning to turn our readings into a more formal textbook
          this semester!
          <br /> <br />A few other differences: We plan to take more students
          than Cubstart. Cubstart has 75 seats open in the academic guide,
          whereas we plan on taking 110-120 students total. Additionally, we
          have 2 lectures per week, whereas Cubstart has a lecture and a lab
          every week.
          {/*
          As stated at the top of this section, we have amazing guest speakers
          from the industry who come to teach and offer their time to our
          students. In addition to guest lecturers, we also have 1-2 career and
          real-world oriented sessions where students can freely ask questions
          to recent grads working in the technology industry, who use the skills
          we teach in this course everyday! Many of these speakers have actually
          been associatted with the course, either as a member of course staff,
          past DeCal student, or as a significant contributer to this
          course&apos;s existance. */}
        </Text>
        <Text textStyle="subtitle2" fontSize="3xl" my={4}>
          Web Development and Design DeCal
        </Text>
        <Text textStyle="body">
          The Web Development and Design (WDD) DeCal focuses much more on design
          and less on programming than we do. In terms of development, they
          teach HTML, CSS, and JavaScript. Unfortunately, the WDD DeCal is not
          being offered in Spring &apos;22.
        </Text>
      </Box>
    </>
  );
};

export default SetsUsApart;
