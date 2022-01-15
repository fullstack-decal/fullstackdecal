import { Lesson } from '../types';

const schedule: Lesson[] = [
  {
    week: 0,
    date: 'Feb 3',
    format: 'Lecture 1',
    topic: 'Introduction',
    readingTitle: 'Setup, Overview, Motivation, Git, and the Terminal ',
    readingLink: '/docs/Lessons/Lesson1',
    assigmentFormat: 'Homework 1',
    assigmentTitle: 'Getting Started',
    assigmentDueDate: 'Feb 8',
  },

  {
    week: 1,
    date: 'Feb 8',
    format: 'Lecture 2',
    topic: 'HTML',
    readingTitle: 'HTML',
    readingLink: '/docs/Lessons/Lesson2',
  },
  {
    week: 1,
    date: 'Feb 10',
    format: 'Lecture 3',
    topic: 'CSS 1',
    readingTitle: 'Introduction to CSS',
    readingLink: '/docs/Lessons/Lesson3',
  },

  {
    week: 2,
    date: 'Feb 15',
    format: 'Lecture 4',
    topic: 'CSS 2',
    readingTitle: 'Advanced CSS',
    readingLink: '/docs/Lessons/Lesson4',
  },
  {
    week: 2,
    date: 'Feb 17',
    format: 'Lecture 5',
    topic: 'JavaScript 1',
    readingTitle: 'Basic JavaScript',
    readingLink: '/docs/Lessons/Lesson5',
  },

  {
    week: 3,
    date: 'Feb 22',
    format: 'Lecture 6',
    topic: 'JavaScript 2',
    readingTitle: 'DOM',
    readingLink: '/docs/Lessons/Lesson6',
  },
  {
    week: 3,
    date: 'Feb 24',
    format: 'Lecture 7',
    topic: 'JavaScript 3',
  },

  {
    week: 4,
    date: 'Mar 1',
    format: 'Lecture 8',
    topic: 'Node',
  },
  {
    week: 4,
    date: 'Mar 3',
    format: 'Lab 1',
    topic: 'Frontend Website Lab',
  },

  {
    week: 5,
    date: 'Mar 8',
    format: 'Lecture 9',
    topic: 'React 1',
  },
  {
    week: 5,
    date: 'Mar 10',
    format: 'Lecture 10',
    topic: 'React 2',
    readingTitle: 'Routing, Styling, and Libraries',
    readingLink: '/docs/Lessons/Lesson10',
  },

  {
    week: 6,
    date: 'Mar 15',
    format: 'Lecture 11',
    topic: 'Backend 1',
    readingTitle: 'HTTP, REST, Postman',
    readingLink: '/docs/Lessons/Lesson11',
  },
  {
    week: 6,
    date: 'Mar 17',
    format: 'Lab 2',
    topic: 'React Lab / Catchup',
  },

  {
    week: 7,
    date: 'Mar 22',
    format: 'Spring Break',
    topic: '',
  },
  {
    week: 7,
    date: 'Mar 24',
    format: 'Spring Break',
    topic: '',
  },

  {
    week: 8,
    date: 'Mar 29',
    format: 'Lecture 12',
    topic: 'UI/UX 1',
  },
  {
    week: 8,
    date: 'Mar 31',
    format: 'Lecture 13',
    topic: 'React 3',
    readingTitle: 'Node, NPM, Express',
    readingLink: '/docs/Lessons/Lesson13',
  }
];

export default schedule;
