import { Week, Assignment, Schedule } from "../types";

const weeks: Week[] = [
  {
    topic: "👋 Welcome to the course!",
    lessons: [
      { 
        date: "Mon, Feb 5",
        topic: "Course Introduction",
        readingTitle: "Introduction",
        readingLink: "/docs/Lessons/Lesson1",
        recordingLink: "https://www.youtube.com/watch?v=fAeXuglTsrU",
      },
      {
        date: "Wed, Feb 7",
        topic: "HTML",
        readingTitle: "HTML",
        readingLink: "/docs/Lessons/Lesson1",
        recordingLink:
          "https://www.youtube.com/watch?v=Q7T5vAdUcI0&feature=youtu.be",
      },
    ],
  },
  {
    topic: "💅 Stylin' your sites",
    lessons: [
      {
        date: "Mon, Feb 12",
        topic: "CSS 1",
        readingTitle: "Introduction to CSS",
        readingLink: "/docs/Lessons/Lesson2",
      },
      {
        date: "Wed, Feb 14",
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
        date: "Mon, Feb 19",
        topic: "Presidents Day🇺🇸🤴 No Class!!",
      },
      {
        date: "Wed, Feb 21",
        topic: "JavaScript 1: Essentials",
        readingTitle: "Basic JavaScript",
        readingLink: "/docs/Lessons/Lesson4",
      },
    ],
  },
  {
    topic: "🕺 Get moving with JavaScript Cont.",
    lessons: [
      {
        date: "Mon, Feb 26",
        topic: "JavaScript 2: DOM",
        readingTitle: "DOM",
        readingLink: "/docs/Lessons/Lesson5",
      },
      {
        date: "Wed, Feb 28",
        topic: "Special Topics: TBD ",
        readingTitle: "",
        readingLink: "",
      },
    ],
  },
  {
    topic: "Introducing React",
    lessons: [
      {
        date: "Mon, Mar 4",
        topic: "Internet and Node.js/NPM",
        readingTitle: "SSR",
        readingLink: "/docs/Lessons/Lesson8",
      },
      {
        date: "Wed, Mar 6",
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
        date: "Mon, Mar 11",
        topic: "React 2: State",
        readingTitle: "Intro to React",
        readingLink: "/docs/Lessons/Lesson9",
      },
      {
        date: "Wed, Mar 13",
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
        date: "Mon, Mar 18",
        topic: "APIs and Postman",
        readingTitle: "APIs",
        readingLink: "/docs/Lessons/Lesson11",
      },
      {
        date: "Wed, Mar 20",
        topic: "Express.js and JSON APIs",
        readingTitle: "Advanced React",
        readingLink: "/docs/Lessons/Lesson10",
      },
    ],
  },
  {
    topic: "More approaches to web dev",
    lessons: [
      {
        date: "Mon, Apr 1",
        topic: "Express.js and AIs",
        readingTitle: "Node.js",
        readingLink: "/docs/Lessons/Lesson8",
      },
      {
        date: "Wed, Apr 3",
        topic: "Databases and Authentication",
        readingTitle: "MySQL and Authentication",
        readingLink: "/docs/Lessons/Lesson14",
      },
    ],
  },
  {
    topic: "🎨 Design and UI/UX",
    lessons: [
      {
        date: "Mon, Apr 8",
        topic: "Design: 1",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
      },
      {
        date: "Wed, Apr 10",
        topic: "Design: 2",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
      },
    ],
  },
  {
    topic: "🕴️ Special Topics",
    lessons: [
      {
        date: "Wed, Apr 15",
        topic: "Special Topics: Web Accessibility",
      },
      {
        date: "Wed, Apr 17",
        topic: "Special Topics: GitHub",
      },
    ],
  },
  {
    topic: "💡 Special Topics",
    lessons: [
      {
        date: "Mon, Apr 15",
        topic: "Special Topics: Web Frameworks",
      },
      { date: "Wed, Apr 17", 
       topic: "Special Topics: TDB" 
    },
    ],
  },
  {
    topic: "The final stretch!",
    lessons: [
      {
        date: "Mon, Apr 22",
        topic: "Final Project Presentations",
      },
      {
        date: "Wed, Apr 24",
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
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 2: Introduction to CSS",
    assigned: "CSS 1",
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
    assigned: "JavaScript 2: DOM",
    link: "/docs/Assignments/Vitamins/Vitamin4",
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 5: Internet Quiz",
    assigned: "Internet and Node.js/NPM",
    link: "/docs/Assignments/Vitamins/Vitamin5",
    due: 5,
    late: 7,
  },

  {
    name: "Mid-Semester Feedback Form",
    assigned: "React 1: Components",
    link: "https://forms.gle/9KHJ3SpseEB9RGUJ7",
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 6: APIs and Postman",
    assigned: "APIs and Postman",
    link: "/docs/Assignments/Vitamins/Vitamin6",
    due: 5,
    late: 7,
  },

  {
    name: "Project 1: First Checkpoint",
    assigned: "CSS 1",
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
    name: "Project 2: Blog",
    assigned: "React 2.5: Advanced React",
    link: "/docs/Assignments/Projects/Blog",
    due: 19,
  },

  {
    name: "Final Project: Groups",
    assigned: "Special Topics: Web Accessibility",
    link: "/docs/Assignments/Projects/FinalProject",
    due: 2,
  },

  {
    name: "Final Project: Idea",
    assigned: "Special Topics: GitHub",
    link: "/docs/Assignments/Projects/FinalProject",
    due: 5,
  },

  {
    name: "Final Project: GitHub & Figma",
    assigned: "Special Topics: Web Frameworks",
    link: "/docs/Assignments/Projects/FinalProject",
    due: 7,
  },
];

const schedule: Schedule = {
  weeks,
  assignments,
  year: 2024,
};

export default schedule;