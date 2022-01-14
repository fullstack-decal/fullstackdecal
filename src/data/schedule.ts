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
  },
  {
    week: 1,
    date: 'Feb 10',
    format: 'Lecture 3',
    topic: 'CSS 1',
  }
];

export default schedule;
