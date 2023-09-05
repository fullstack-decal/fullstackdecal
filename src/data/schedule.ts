import { Week, Assignment, Schedule } from "../types";

const weeks: Week[] = [
  {
    topic: "👋 Welcome to the course!",
    lessons: [
      {
        date: "Wed, Sep 6",
        topic: "Course Introduction",
        readingTitle: "Introduction",
        readingLink: "/docs/Lessons/Lesson1",
        recordingLink: "test",
      },
      {
        date: "Fri, Sep 8",
        topic: "HTML",
        readingTitle: "HTML",
        readingLink: "/docs/Lessons/Lesson1",
      },
    ],
  },
  {
    topic: "💅 Stylin' your sites",
    lessons: [
      {
        date: "Wed, Sep 13",
        topic: "CSS 1",
        readingTitle: "Introduction to CSS",
        readingLink: "/docs/Lessons/Lesson2",
      },
      {
        date: "Fri, Sep 15",
        topic: "CSS 2",
        readingTitle: "Advanced CSS",
        readingLink: "/docs/Lessons/Lesson3",
      },
    ],
  },
  {
    topic: "🕺 Get moving with JavaScript",
    lessons: [
      {
        date: "Wed, Sep 20",
        topic: "JavaScript 1: Essentials",
        readingTitle: "Basic JavaScript",
        readingLink: "/docs/Lessons/Lesson4",
      },
      {
        date: "Fri, Sep 22",
        topic: "JavaScript 2: DOM",
        readingTitle: "DOM",
        readingLink: "/docs/Lessons/Lesson5",
      },
    ],
  },
  {
    topic: "Introducing React",
    lessons: [
      {
        date: "Wed, Sep 27",
        topic: "Internet and Node.js/NPM",
        readingTitle: "SSR",
        readingLink: "/docs/Lessons/Lesson8",
      },
      {
        date: "Fri, Sep 29",
        topic: "React 1: Components",
        readingTitle: "Intro to React",
        readingLink: "/docs/Lessons/Lesson9",
      },
    ],
  },
  {
    topic: "Continuing React",
    lessons: [
      {
        date: "Wed, Oct 4",
        topic: "React 2: State",
        readingTitle: "Intro to React",
        readingLink: "/docs/Lessons/Lesson9",
      },
      {
        date: "Fri, Oct 6",
        topic: "React 2.5: Advanced React",
        readingTitle: "Advanced React",
        readingLink: "/docs/Lessons/Lesson10",
      },
    ],
  },
  {
    topic: "Introduction to APIs",
    lessons: [
      {
        date: "Wed, Oct 11",
        topic: "APIs and React 3: fetch/Routing",
        readingTitle: "Async JavaScript",
        readingLink: "/docs/Lessons/Lesson7",
      },
      {
        date: "Fri, Oct 13",
        topic: "Express.js and JSON APIs",
        readingTitle: "Express",
        readingLink: "/docs/Lessons/Lesson14",
      },
    ],
  },
  {
    topic: "More approaches to web dev",
    lessons: [
      { date: "Wed, Oct 18", topic: "Express.js and SSR", readingTitle: "" },
      {
        date: "Fri, Oct 20",
        topic: "Web Frameworks overview",
      },
    ],
  },
  {
    topic: "Backend concepts",
    lessons: [
      {
        date: "Wed, Oct 25",
        topic: "Databases",
        readingTitle: "Databases & Auth",
        readingLink: "/docs/Lessons/Lesson16",
      },
      {
        date: "Fri, Oct 27",
        topic: "Authentication",
        readingTitle: "Databases & Auth",
        readingLink: "/docs/Lessons/Lesson16",
      },
    ],
  },
  {
    topic: "🎨 Design and UI/UX",
    lessons: [
      {
        date: "Wed, Nov 1",
        topic: "Design",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
      },
      {
        date: "Fri, Nov 3",
        topic: "TBA",
      },
    ],
  },
  {
    topic: "",
    lessons: [
      {
        date: "Wed, Nov 8",
        topic: "TBA",
      },
      { date: "Fri, Nov 10", topic: "Veteran's Day" },
    ],
  },
  {
    topic: "",
    lessons: [
      { date: "Wed, Nov 15", topic: "TBA" },
      { date: "Fri, Nov 17", topic: "TBA" },
    ],
  },
  {
    topic: "🐔😋",
    lessons: [
      { date: "Wed, Nov 22", topic: "Non-Instructional Day" },
      { date: "Fri, Nov 24", topic: "Thanksgiving" },
    ],
  },
  {
    topic: "The final stretch!",
    lessons: [
      {
        date: "Wed, Nov 29",
        topic: "Final Project Presentations",
      },
      {
        date: "Fri, Dec 1",
        topic: "Final Project Presentations",
      },
    ],
  },
];

const assignments: Assignment[] = [
  {
    name: "Vitamin 1: HTML",
    assigned: "HTML",
    link: "/docs/Assignments/Vitamins/Vitamin1",
    due: 1,
  },

  {
    name: "Vitamin 2: Introduction to CSS",
    assigned: "CSS 1",
    link: "/docs/Assignments/Vitamins/Vitamin1",
    due: 1,
  },

  {
    name: "Vitamin 3: CSS Layout",
    assigned: "CSS 2",
    link: "/docs/Assignments/Vitamins/Vitamin1",
    due: 1,
  },

  {
    name: "Project 1: Personal Website",
    assigned: "CSS 1",
    link: "/docs/Assignments/Projects/PersonalWebsite",
    due: 4,
  },
];

const schedule: Schedule = {
  weeks,
  assignments,
  year: 2023,
};

export default schedule;
