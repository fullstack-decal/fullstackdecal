/*
  This file contains the different types that the website data will cover. More information about each type can be found below. Feel free to change any types as you see fit if the website data requires it.
*/

export interface Link {
  link: string;
  name: string;
}

export interface CheckpointAssignment {
  name: string;
  dueWeek: number; // index of week this assignment is due, 0 is the 1st week and so on
  dueDay: number; // index of the day this assignment is due on dueWeek, 0 is Sunday and so on
}

export interface IncompleteAssignment {
  link: Link;
  assignedWeek?: number; // index of week this assignment is assigned, 0 is the 1st week and so on
  dueWeek: number; // index of week this assignment is due, 0 is the 1st week and so on
  dueDay: number; // index of the day this assignment is due on dueWeek, 0 is Sunday and so on
  checkpoints?: CheckpointAssignment[];
}

export interface Assignment {
  link: Link;
  assignedWeek?: number; // index of week this assignment is assigned, 0 is the 1st week and so on
  dueWeek: number; // index of week this assignment is due, 0 is the 1st week and so on
  type: "Vitamin" | "Project";
  dueDay: number; // index of the day this assignment is due on dueWeek, 0 is Sunday and so on
  checkpoints?: Assignment[];
}

export interface Schedule {
  weeks: Week[];
  vitamins: Assignment[];
  projects: Assignment[];
  startDate: Date; // date of the sunday of the first lecture of the class- this date will be used to calculate relative days for all lectures and all assignments
  lessonDays: number[]; // index of the days of lessions on a particular week, 0 is Sunday and so on
}

export interface Week {
  lessons: Lesson[];
  title: string;
}

export interface Lesson {
  topic: string;
  reading?: Link[];
  slides?: Link;
  recording?: Link;
}

export interface Staff {
  name: string;
  image: string;
  role: "Head TA & Facilitator" | "Full-Stack TA" | "Design TA";
  linkedin: string;
  website?: string;
  bio?: string;
  github?: string;
  email: string;
}

export interface PastStaff {
  name: string;
  image: string;
  linkedin: string;
}
