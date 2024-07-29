export interface Assignment {
  link: string;
  name: string;
  assigned: string;
  due: number;
}

export interface Schedule {
  weeks: Week[];
  assignments: Assignment[];
  year: number;
}

export interface Week {
  lessons: Lesson[];
  topic: string;
}

export interface Lesson {
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
}
