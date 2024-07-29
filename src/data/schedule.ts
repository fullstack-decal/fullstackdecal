/**
 * Schedule data type
 *
 * The Schedule data type represents a course schedule, consisting of an array of weeks and an array of assignments.
 *
 * @example
 * const schedule: Schedule = {
 *   weeks: [
 *     {
 *       title: "Welcome to the course!",
 *       lessons: [
 *         {
 *           date: "Mon, Sept 16",
 *           topic: "Course Introduction + Github",
 *           reading: [{ link: "/docs/Lessons/Lesson1", name: "Introduction" }],
 *         },
 *         {
 *           date: "Wed, Sept 18",
 *           topic: "HTML",
 *           reading: [{ link: "/docs/Lessons/Lesson2", name: "HTML" }],
 *         },
 *      ],
 *    },
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
    title: "👋 Welcome to the course!",
    lessons: [
      {
        date: "Mon, Sept 16",
        topic: "Course Introduction + Github",
        reading: [{ link: "/docs/Lessons/Lesson1", name: "Introduction" }],
      },
      {
        date: "Wed, Sept 18",
        topic: "HTML",
        reading: [{ link: "/docs/Lessons/Lesson2", name: "HTML" }],
      },
    ],
  },
  {
    title: "💅 Stylin' your sites",
    lessons: [
      {
        date: "Mon, Sept 23",
        topic: "CSS 1: Introduction to CSS",
        reading: [{ link: "/docs/Lessons/Lesson3", name: "Introduction to CSS" }],
      },
      {
        date: "Wed, Sept 25",
        topic: "CSS 2: Advanced CSS",
        reading: [{ link: "/docs/Lessons/Lesson4", name: "Advanced CSS" }],
      },
    ],
  },
  {
    title: "🕺 Get moving with JavaScript",
    lessons: [
      {
        date: "Mon, Sept 30",
        topic: "JavaScript 1: Introduction to JavaScript + Asynchronous JS",
        reading: [{ link: "/docs/Lessons/Lesson5", name: "Introduction to JavaScript" }, { link: "/docs/Lessons/Lesson6", name: "Scope + Asynchronous JS" },],
      },
      {
        date: "Wed, Oct 2",
        topic: "JavaScript 2: DOM + TypeScript",
        reading: [{ link: "/docs/Lessons/Lesson7", name: "DOM" } ,{ link: "/docs/Lessons/Lesson8", name: "TypeScript" }],
      },
    ],
  },
  {
    title: "React!",
    lessons: [
      {
        date: "Mon, Oct 7",
        topic: "React 1: Introduction to React",
        reading: [{ link: "/docs/Lessons/Lesson9", name: "Introduction to React" }],
      },
      {
        date: "Wed, Oct 9",
        topic: "React 2: More React Hooks, Routing, Fetching Data",
        reading: [{ link: "/docs/Lessons/Lesson10", name: "More React Hooks" }, { link: "/docs/Lessons/Lesson11", name: "Routing + Axios" }],
      },
    ],
  },
  {
    title: "Servin' servers",
    lessons: [
      {
        date: "Mon, Oct 14",
        topic: "Node.js, Express.js, Server Side Rendering",
        reading: [{ link: "/docs/Lessons/Lesson12", name: "Node.js + Package Managers" }, { link: "/docs/Lessons/Lesson13", name: "Server-Side Rendering with Express.js, Cookies" }],
      },
      {
        date: "Wed, Oct 16",
        topic: "Express.js Part 2, APIs, Client Side Rendering",
        reading: [{ link: "/docs/Lessons/Lesson14", name: "Web Servers with Express.js" }, { link: "/docs/Lessons/Lesson15", name: "APIs + Client Side Rendering" }],
      },
    ],
  },
  {
    title: "Databases, last piece of the puzzle",
    lessons: [
      {
        date: "Mon, Oct 21",
        topic: "Database Intro, NoSQL vs SQL, MongoDB",
        reading: [{ link: "/docs/Lessons/Lesson16", name: "Introduction to Databases" }, { link: "/docs/Lessons/Lesson17", name: "MongoDB" }],
      },
      {
        date: "Wed, Oct 23",
        topic: "Relational Databases, SQL, ORMs",
        reading: [{ link: "/docs/Lessons/Lesson18", name: "SQL Databases" }, { link: "/docs/Lessons/Lesson19", name: "Object Relational Models" }]
      },
    ],
  },
  {
    title: "Can't forget about design",
    lessons: [
      {
        date: "Mon, Oct 28",
        topic: "UI/UX 1: Introduction to Design",
        reading: [{ link: "/docs/Lessons/Lesson20", name: "Introduction to UI/UX" }]
      },
      {
        date: "Wed, Oct 30",
        topic: "UI/UX 2: Human Centered Design Principles",
        reading: [{ link: "/docs/Lessons/Lesson21", name: "Human Centered Design Principles" }]
      },
    ],
  },
  {
    title: "More approaches to web dev",
    lessons: [
      {
        date: "Mon, Nov 4",
        topic: "Next.js",
        reading: [{ link: "/docs/Lessons/Lesson22", name: "Next.js" }]
      },
      {
        date: "Wed, Nov 6",
        topic: "Authentication + Firebase",
        reading: [{ link: "/docs/Lessons/Lesson23", name: "Authentication/Authorization" }, { link: "/docs/Lessons/Lesson24", name: "Firebase" }]
      },
    ],
  },
  {
    title: "Some useful frameworks for you",
    lessons: [
      {
        date: "Mon, Nov 11",
        topic: "VETERAN'S DAY NO LECTURE",
      },
      {
        date: "Wed, Nov 13",
        topic: "CSS Frameworks + Redux.js",
        reading: [{ link: "/docs/Lessons/Lesson24", name: "CSS Frameworks" }, { link: "/docs/Lessons/Lesson25", name: "Redux.js" }]
      },
    ],
  },
  {
    title: "Ending strong",
    lessons: [
      {
        date: "Mon, Nov 18",
        topic: "Django + Flask",
        reading: [{ link: "/docs/Lessons/Lesson25", name: "Django" }, { link: "/docs/Lessons/Lesson26", name: "Flask" }]
      },
      {
        date: "Wed, Nov 20",
        topic: "Deploying with AWS/Vercel + Three.js",
        reading: [{ link: "/docs/Lessons/Lesson27", name: "Deploying Your Website" }, { link: "/docs/Lessons/Lesson28", name: "Creative Web Development + Three.js" }]
      },
    ],
  },
  {
    title: "THANKSGIVING BREAK NO LECTURE",
    lessons: [],
  },
  {
    title: "The final stretch!",
    lessons: [
      {
        date: "Mon, Dec 2",
        topic: "Final Project Presentations",
      },
      {
        date: "Wed, Dec 4",
        topic: "Final Project Presentations",
      },
    ],
  },
];

const assignments: Assignment[] = [
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin1", name: "Vitamin 1: HTML & CSS" },
    assignedWeek: 2,
    dueWeek: 3,
    dueDate: "Mon, Oct 7"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin2", name: "Vitamin 2: JavaScript" },
    assignedWeek: 3,
    dueWeek: 4,
    dueDate: "Mon, Oct 14"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin3", name: "Vitamin 3: React" },
    assignedWeek: 4,
    dueWeek: 5,
    dueDate: "Mon, Oct 21"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin4", name: "Vitamin 4: APIs & Servers" },
    assignedWeek: 5,
    dueWeek: 6,
    dueDate: "Mon, Oct 28"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin5", name: "Vitamin 5: Databases" },
    assignedWeek: 6,
    dueWeek: 7,
    dueDate: "Mon, Nov 4"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin6", name: "Vitamin 6: Design" },
    assignedWeek: 7,
    dueWeek: 8,
    dueDate: "Mon, Nov 11"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin7", name: "Vitamin 7: Next.js + Auth" },
    assignedWeek: 8,
    dueWeek: 9,
    dueDate: "Mon, Nov 18"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin8", name: "Vitamin 8: CSS Frameworks + Redux" },
    assignedWeek: 9,
    dueWeek: 10,
    dueDate: "Mon, Nov 25"
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Vitamin9", name: "Vitamin 9: Deploying + Three.js (Optional)" },
    assignedWeek: 10,
    dueWeek: 11,
    dueDate: "Mon, Dec 2"
  },
  {
    link: { link: "/docs/Assignments/Projects/Project1", name: "Project 1" },
    assignedWeek: 2,
    dueWeek: 4,
    dueDate: "Mon, Oct 14"
  },
  {
    link: { link: "/docs/Assignments/Projects/Project2", name: "Project 2" },
    assignedWeek: 4,
    dueWeek: 7,
    dueDate: "Mon, Nov 4"
  },
  {
    link: { link: "/docs/Assignments/Projects/Project3", name: "Final Project Checkpoint 1" },
    dueWeek: 8,
    dueDate: "Wed, Nov 13"
  },
  {
    link: { link: "/docs/Assignments/Projects/Project3", name: "Final Project Checkpoint 2" },
    dueWeek: 9,
    dueDate: "Fri, Nov 22"
  },
  {
    link: { link: "/docs/Assignments/Projects/Project3", name: "Final Project" },
    assignedWeek: 7,
    dueWeek: 11,
    dueDate: "Fri, Dec 6"
  },
];

const schedule: Schedule = {
  weeks,
  assignments,
};

export default schedule;
