export type Assignment = {
  link: string;
  name: string;
  assigned: string;
  due: number;
};

export type Schedule = {
  weeks: Week[];
  assignments: Assignment[];
  year: number;
};

export type Week = {
  lessons: Lesson[];
  topic: string;
};

export type Lesson = {
  date: string;
  format: string;
  topic: string;
  recordingLink?: string;
  readingTitle?: string;
  readingLink?: string;
  slides?: string;
  assigmentFormat?: string;
  assigmentTitle?: string;
  assigmentDueDate?: string;
  assigmentLink?: string;
  starterCode?: string;
};
