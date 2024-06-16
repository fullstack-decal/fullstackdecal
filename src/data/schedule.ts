/**
 * Schedule data type
 *
 * The Schedule data type represents a course schedule, consisting of an array of weeks and an array of assignments.
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
 */

import { Week, Assignment, Schedule } from "../types";

const weeks: Week[] = [
  {
    topic: "👋 Welcome to the course!",
    lessons: [
      {
        date: "M 20",
        topic: "Course Introduction",
        readingTitle: "Introduction",
        readingLink: "/docs/Lessons/Lesson1",
        recordingLink: "https://www.youtube.com/watch?v=fAeXuglTsrU",
        format: ""
      },
      {
        date: "Wed, Feb 7",
        topic: "HTML",
        readingTitle: "HTML",
        readingLink: "/docs/Lessons/Lesson1",
        recordingLink: "https://www.youtube.com/watch?v=Q7T5vAdUcI0&feature=youtu.be",
        format: ""
      },
    ],
  },
  {
    topic: "💅 Stylin' your sites",
    lessons: [
      {
        date: "Mon, Feb 12",
        topic: "8913yu1893",
        readingTitle: "Introduction to CSS",
        readingLink: "/docs/Lessons/Lesson2",
        format: ""
      },
      {
        date: "Wed, Feb 14",
        topic: "CSS 2",
        readingTitle: "Advanced CSS",
        readingLink: "/docs/Lessons/Lesson3",
        format: ""
      },
    ],
  },
  {
    topic: "🕺 Get moving with JavaScript",
    lessons: [
      {
        date: "Mon, Feb 19",
        topic: "Presidents Day🇺🇸🤴 No Class!!",
        format: ""
      },
      {
        date: "Wed, Feb 21",
        topic: "JavaScript 1: Essentials",
        readingTitle: "Basic JavaScript",
        readingLink: "/docs/Lessons/Lesson4",
        format: ""
      },
    ],
  },
  {
    topic: "🕺 Get moving with JavaScript Cont.",
    lessons: [
      {
        date: "Mon, Feb 26",
        topic: "Manuell's socks2",
        readingTitle: "DOM",
        readingLink: "/docs/Lessons/Lesson5",
        format: ""
      },
      {
        date: "Wed, Feb 28",
        topic: "Special Topics: TBD ",
        readingTitle: "",
        readingLink: "",
        format: ""
      },
    ],
  },
  {
    topic: "Introducing React",
    lessons: [
      {
        date: "Mon, Mar 4",
        topic: "Manuell's socks",
        readingTitle: "SSR",
        readingLink: "/docs/Lessons/Lesson8",
        format: ""
      },
      {
        date: "Wed, Mar 6",
        topic: "React 1: Components",
        readingTitle: "Intro to React",
        readingLink: "/docs/Lessons/Lesson9",
        format: ""
      },
    ],
  },
  {
    topic: "Continuing React",
    lessons: [
      {
        date: "Mon, Mar 11",
        topic: "React 2: State",
        readingTitle: "Intro to React",
        readingLink: "/docs/Lessons/Lesson9",
        format: ""
      },
      {
        date: "Wed, Mar 13",
        topic: "React 2.5: Advanced React",
        readingTitle: "Advanced React",
        readingLink: "/docs/Lessons/Lesson10",
        format: ""
      },
    ],
  },
  {
    topic: "Introduction to APIs",
    lessons: [
      {
        date: "Mon, Mar 18",
        topic: "Project 2 Worksession",
        readingTitle: "",
        readingLink: "",
        format: ""
      },
      {
        date: "Wed, Mar 20",
        topic: "APIs and Postman",
        readingTitle: "APIs",
        readingLink: "/docs/Lessons/Lesson11",
        format: ""
      },
    ],
  },
  {
    topic: "More approaches to web dev",
    lessons: [
      {
        date: "Mon, Apr 1",
        topic: "Express.js and JSON APIs",
        readingTitle: "Node.js",
        readingLink: "/docs/Lessons/Lesson8",
        format: ""
      },
      {
        date: "Wed, Apr 3",
        topic: "Databases and Authentication",
        readingTitle: "MySQL and Authentication",
        readingLink: "/docs/Lessons/Lesson14",
        format: ""
      },
    ],
  },
  {
    topic: "🎨 Design and UI/UX",
    lessons: [
      {
        date: "Mon, Apr 8",
        topic: "Design: 1 & 2",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
        format: ""
      },
      {
        date: "Wed, Apr 10",
        topic: "Special Topics: 🤫🤫🤫🤫🤫",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
        format: ""
      },
    ],
  },
  {
    topic: "🕴️ Special Topics",
    lessons: [
      {
        date: "Wed, Apr 15",
        topic: "Special Topics: 🤫🤫🤫🤫🤫",
        format: ""
      },
      {
        date: "Wed, Apr 17",
        topic: "Special Topics: Career Pannel",
        format: ""
      },
    ],
  },
  {
    topic: "The final stretch!",
    lessons: [
      {
        date: "Mon, Apr 22",
        topic: "Final Project Presentations",
        format: ""
      },
      {
        date: "Wed, Apr 24",
        topic: "Final Project Presentations",
        format: ""
      },
    ],
  },
];

const assignments: Assignment[] = [
  {
    name: "Vitamin 1: HTML",
    assigned: "HTML",
    link: "/docs/Assignments/Vitamins/Vitamin1",
    due: 5,
    late: 7,
  },

  {
    name: "AIDONWIOAWDNAWINDO",
    assigned: "8913yu1893",
    link: "/docs/Assignments/Vitamins/Vitamin2",
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 3: CSS Layout",
    assigned: "CSS 2",
    link: "/docs/Assignments/Vitamins/Vitamin3",
    due: 7,
    late: 9,
  },

  {
    name: "Vitamin 4: JavaScript and DOM",
    assigned: "Manuell's socks2",
    link: "/docs/Assignments/Vitamins/Vitamin4",
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 5: Internet Quiz",
    assigned: "Manuell's socks",
    link: "/docs/Assignments/Vitamins/Vitamin5",
    due: 5,
    late: 7,
  },

  {
    name: "Mid-Semester Feedback Form",
    assigned: "React 2.5: Advanced React",
    link: "https://forms.gle/WhiLAipZKQJ8x9kG7" ,
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 6: APIs and Postman",
    assigned: "APIs and Postman",
    link: "/docs/Assignments/Vitamins/Vitamin6",
    due: 12,
    late: 14,
  },

  {
    name: "Project 1: First Checkpoint",
    assigned: "8913yu1893",
    link: "/docs/Assignments/Projects/PersonalWebsite",
    due: 9,
  },

  {
    name: "Project 1: Second Checkpoint",
    assigned: "JavaScript 1: Essentials",
    link: "/docs/Assignments/Projects/PersonalWebsite",
    due: 14,
  },

  {
    name: "Project 2",
    assigned: "React 2.5: Advanced React",
    link: "/docs/Assignments/Projects/Blog",
    due: 19,
  },

  // {
  //   name: "Final Project: Groups",
  //   assigned: "Special Topics: Web Accessibility",
  //   link: "/docs/Assignments/Projects/FinalProject",
  //   due: 2,
  // },

  // {
  //   name: "Final Project: Idea",
  //   assigned: "Special Topics: GitHub",
  //   link: "/docs/Assignments/Projects/FinalProject",
  //   due: 5,
  // },

  // {
  //   name: "Final Project: GitHub & Figma",
  //   assigned: "Special Topics: Web Frameworks",
  //   link: "/docs/Assignments/Projects/FinalProject",
  //   due: 7,
  // },
];

const schedule: Schedule = {
  weeks,
  assignments,
  year: 2024,
};

export default schedule;
