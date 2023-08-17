export type Assignment = {
  type: "vitamin" | "project";
  link: string;
  name: string;
  assign: string;
  due: string;
};

export type Schedule = {
  weeks: Week[];
  assignments: Assignment[];
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
