/*
  Add data for the course schedule here. All dates can be relative with respect to the start date included on the schedule object, which should be the Sunday of the first lecture in the class.
  Additionally, in the schedule object you can set the day indexes for all lecture days so lectures are automatically tied to a specific lecture day.
  
  For the weeks list, add objects of type Week to add an additional week card to the schedule screen.
  
  Example:

  {
    title: "Welcome to the course!",
    lessons: [
      {
        topic: "Course Introduction + Github",
        reading: [{ link: "/docs/Lessons/Introduction", name: "Introduction" }],
      },
      {
        topic: "HTML",
        reading: [{ link: "/docs/Lessons/HTML", name: "HTML" }],
      },
    ],
  }

  Notice how a particular week does not need specific days, the current code will handle that for you based on the start date of the schedule, week index, and lecture day indexes.
  All that is needed is specific lecture names, and links to the specific readings.

  For the vitamins and projects list, add objects of type IncompleteAssignment to add support for assignment deadlines and assigned times. This information is based on week indexes,
  so you don't have to worry about manually adding specific deadline dates here.

  Example:

  {
    link: { link: "/docs/Assignments/Vitamins/HTMLCSS", name: "HTML & CSS" },
    assignedWeek: 2,
    dueWeek: 3,
    dueDay: 1,
  },

  For the name, add just the assignment name itself. The code will automatically add a vitamin/project numbering prefix based on the ordering of assignments in the respective lists.
  This also applies for checkpoints for an assignment as well. Refer to the types file to see how they are built in the IncompleteAssignment type. Prefix numbering will also be handled there.

  For schedule data, the most important thing is the ordering within the lists. This is also the code will put specific dates per week/assignment. This also allows an easy re-ordering of the schedule if plans change without worrying about re-writing dates.
*/

import { Week, Assignment, Schedule, IncompleteAssignment } from "../types";

const resolveAssignments = (
  rawAssignments: IncompleteAssignment[],
  type: "Vitamin" | "Project",
): Assignment[] =>
  rawAssignments.map((assignment, index) => ({
    link: {
      link: assignment.link.link,
      name: `${type} ${index + 1}: ${assignment.link.name}`,
    },
    assignedWeek: assignment.assignedWeek,
    dueWeek: assignment.dueWeek,
    dueDay: assignment.dueDay,
    type: type,
    checkpoints:
      assignment.checkpoints &&
      assignment.checkpoints.map((checkpoint, cIndex) => ({
        link: {
          link: assignment.link.link,
          name: `${type} ${index + 1} Checkpoint ${cIndex + 1}: ${checkpoint.name}`,
        },
        dueWeek: checkpoint.dueWeek,
        dueDay: checkpoint.dueDay,
        type: type,
      })),
  }));

const weeks: Week[] = [
  {
    title: "Welcome to the course!",
    lessons: [
      {
        topic: "Course Introduction + Github",
        reading: [
          { link: "/docs/Lessons/Introduction", name: "Introduction" },
          { link: "/docs/Lessons/GitHub", name: "GitHub" },
        ],
      },
      {
        topic: "HTML",
        reading: [{ link: "/docs/Lessons/HTML", name: "HTML" }],
      },
    ],
  },
  {
    title: "Stylin' your sites",
    lessons: [
      {
        topic: "CSS 1: Introduction to CSS",
        reading: [
          { link: "/docs/Lessons/CSSIntro", name: "Introduction to CSS" },
        ],
      },
      {
        topic: "CSS 2: Advanced CSS",
        reading: [{ link: "/docs/Lessons/CSSAdv", name: "Advanced CSS" }],
      },
    ],
  },
  {
    title: "Get moving with JavaScript",
    lessons: [
      {
        topic: "JavaScript 1: Introduction to JavaScript + Asynchronous JS",
        reading: [
          { link: "/docs/Lessons/JSIntro", name: "Introduction to JavaScript" },
          { link: "/docs/Lessons/Lesson6", name: "Scope + Asynchronous JS" },
        ],
      },
      {
        topic: "JavaScript 2: DOM + TypeScript",
        reading: [
          { link: "/docs/Lessons/DOM", name: "DOM" },
          { link: "/docs/Lessons/TypeScript", name: "TypeScript" },
        ],
      },
    ],
  },
  {
    title: "Can't forget about design",
    lessons: [
      {
        topic: "UI/UX 1: Introduction to Design",
        reading: [
          { link: "/docs/Lessons/UIUXIntro", name: "Introduction to UI/UX" },
        ],
      },
      {
        topic: "UI/UX 2: Human Centered Design Principles",
        reading: [
          {
            link: "/docs/Lessons/HCD",
            name: "Human Centered Design Principles",
          },
        ],
      },
    ],
  },
  {
    title: "React!",
    lessons: [
      {
        topic: "React 1: Introduction to React",
        reading: [
          { link: "/docs/Lessons/ReactIntro", name: "Introduction to React" },
        ],
      },
      {
        topic: "React 2: More React Hooks, Routing, Fetching Data",
        reading: [
          { link: "/docs/Lessons/ReactHooks", name: "More React Hooks" },
          { link: "/docs/Lessons/Routing", name: "Routing + Axios" },
        ],
      },
    ],
  },
  {
    title: "Servin' servers",
    lessons: [
      {
        topic: "Node.js, Express.js, Server Side Rendering",
        reading: [
          { link: "/docs/Lessons/Node", name: "Node.js + Package Managers" },
          {
            link: "/docs/Lessons/SSR",
            name: "Server-Side Rendering with Express.js, Cookies",
          },
        ],
      },
      {
        topic: "Express.js Part 2, APIs, Client Side Rendering",
        reading: [
          { link: "/docs/Lessons/Web", name: "Web Servers with Express.js" },
          { link: "/docs/Lessons/CSR", name: "APIs + Client Side Rendering" },
        ],
      },
    ],
  },
  {
    title: "Databases, last piece of the puzzle",
    lessons: [
      {
        topic: "Databases Intro, NoSQL vs SQL, MongoDB",
        reading: [
          { link: "/docs/Lessons/DBIntro", name: "Introduction to Databases" },
          { link: "/docs/Lessons/Mongo", name: "MongoDB" },
        ],
      },
      {
        topic: "Relational Databases, SQL, ORMs",
        reading: [
          { link: "/docs/Lessons/SQL", name: "SQL Databases" },
          { link: "/docs/Lessons/ORM", name: "Object Relational Models" },
        ],
      },
    ],
  },
  {
    title: "More approaches to web dev",
    lessons: [
      {
        topic: "Next.js",
        reading: [{ link: "/docs/Lessons/Next", name: "Next.js" }],
      },
      {
        topic: "Authentication + Firebase",
        reading: [
          { link: "/docs/Lessons/Auth", name: "Authentication/Authorization" },
          { link: "/docs/Lessons/Firebase", name: "Firebase" },
        ],
      },
    ],
  },
  {
    title: "Some useful frameworks for you",
    lessons: [
      {
        topic: "VETERAN'S DAY NO LECTURE",
      },
      {
        topic: "CSS Frameworks + Redux.js",
        reading: [
          { link: "/docs/Lessons/CSSMore", name: "CSS Frameworks" },
          { link: "/docs/Lessons/Redux", name: "Redux.js" },
        ],
      },
    ],
  },
  {
    title: "Ending strong",
    lessons: [
      {
        topic: "Django + Flask",
        reading: [
          { link: "/docs/Lessons/Django", name: "Django" },
          { link: "/docs/Lessons/Flask", name: "Flask" },
        ],
      },
      {
        topic: "Deploying with AWS/Vercel + Three.js",
        reading: [
          { link: "/docs/Lessons/Deploy", name: "Deploying Your Website" },
          {
            link: "/docs/Lessons/Creative",
            name: "Creative Web Development + Three.js",
          },
        ],
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
        topic: "Final Project Presentations",
      },
      {
        topic: "Final Project Presentations",
      },
    ],
  },
];

const vitamins: IncompleteAssignment[] = [
  {
    link: { link: "/docs/Assignments/Vitamins/HTMLCSS", name: "HTML & CSS" },
    assignedWeek: 2,
    dueWeek: 3,
    dueDay: 1,
  },
  {
    link: { link: "/docs/Assignments/Vitamins/JS", name: "JavaScript" },
    assignedWeek: 3,
    dueWeek: 4,
    dueDay: 1,
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Design", name: "Design" },
    assignedWeek: 4,
    dueWeek: 5,
    dueDay: 1,
  },
  {
    link: { link: "/docs/Assignments/Vitamins/React", name: "React" },
    assignedWeek: 5,
    dueWeek: 6,
    dueDay: 1,
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Server", name: "APIs & Servers" },
    assignedWeek: 6,
    dueWeek: 7,
    dueDay: 1,
  },
  {
    link: { link: "/docs/Assignments/Vitamins/Databases", name: "Databases" },
    assignedWeek: 7,
    dueWeek: 8,
    dueDay: 1,
  },
  {
    link: {
      link: "/docs/Assignments/Vitamins/NextAuth",
      name: "Next.js + Auth",
    },
    assignedWeek: 8,
    dueWeek: 9,
    dueDay: 1,
  },
  {
    link: {
      link: "/docs/Assignments/Vitamins/CSSRedux",
      name: "CSS Frameworks + Redux",
    },
    assignedWeek: 9,
    dueWeek: 10,
    dueDay: 1,
  },
  {
    link: {
      link: "/docs/Assignments/Vitamins/DeployThree",
      name: "Deploying + Three.js (Optional)",
    },
    assignedWeek: 10,
    dueWeek: 11,
    dueDay: 1,
  },
];

const projects: IncompleteAssignment[] = [
  {
    link: {
      link: "/docs/Assignments/Projects/PersonalWebsite",
      name: "Personal Website",
    },
    assignedWeek: 2,
    dueWeek: 4,
    dueDay: 1,
  },
  {
    link: {
      link: "/docs/Assignments/Projects/APImagination",
      name: "APImagination",
    },
    assignedWeek: 4,
    dueWeek: 7,
    dueDay: 1,
  },
  {
    link: {
      link: "/docs/Assignments/Projects/FinalProject",
      name: "Final Project",
    },
    assignedWeek: 7,
    dueWeek: 11,
    dueDay: 5,
    checkpoints: [
      {
        name: "Project Idea",
        dueWeek: 8,
        dueDay: 3,
      },
      {
        name: "Design Prototype",
        dueWeek: 9,
        dueDay: 5,
      },
    ],
  },
];

const schedule: Schedule = {
  weeks,
  vitamins: resolveAssignments(vitamins, "Vitamin"),
  projects: resolveAssignments(projects, "Project"),
  startDate: new Date("September 15, 2024"),
  lessonDays: [1, 3],
};

export default schedule;
