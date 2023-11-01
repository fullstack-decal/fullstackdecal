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
        recordingLink: "https://www.youtube.com/watch?v=fAeXuglTsrU",
      },
      {
        date: "Fri, Sep 8",
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
        topic: "APIs and Postman",
        readingTitle: "APIs",
        readingLink: "/docs/Lessons/Lesson11",
      },
      {
        date: "Fri, Oct 13",
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
        date: "Wed, Oct 18",
        topic: "Express.js and AIs",
        readingTitle: "Node.js",
        readingLink: "/docs/Lessons/Lesson8",
      },
      {
        date: "Fri, Oct 20",
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
        date: "Wed, Oct 25",
        topic: "Design: 1",
        readingTitle: "UI/UX",
        readingLink: "/docs/Lessons/Lesson12",
      },
      {
        date: "Fri, Oct 27",
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
        date: "Wed, Nov 1",
        topic: "Special Topics: Web Accessibility",
      },
      {
        date: "Fri, Nov 3",
        topic: "Special Topics: GitHub",
      },
    ],
  },
  {
    topic: "💡 Special Topics",
    lessons: [
      {
        date: "Wed, Nov 8",
        topic: "Special Topics: Web Frameworks",
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
    due: 5,
    late: 7,
  },

  {
    name: "Vitamin 2: Introduction to CSS",
    assigned: "CSS 1",
    link: "/docs/Assignments/Vitamins/Vitamin2",
    due: 7,
    late: 9,
  },

  {
    name: "Vitamin 3: CSS Layout",
    assigned: "CSS 2",
    link: "/docs/Assignments/Vitamins/Vitamin3",
    due: 5,
    late: 7,
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
  year: 2023,
};

export default schedule;
