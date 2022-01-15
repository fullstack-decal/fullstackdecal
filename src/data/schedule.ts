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
    format: 'Lecture 5',
    topic: 'JavaScript 2',
  },
  {
    week: 3,
    date: 'Feb 24',
    format: 'Lecture 6',
    topic: 'JavaScript 3',
  }
];

export default schedule;
