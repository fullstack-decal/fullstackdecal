export interface Link {
  link: string;
  name: string;
}

export interface Assignment {
  link: Link;
  assignedWeek?: number;
  dueWeek: number;
  dueDate: string;
}

export interface Schedule {
  weeks: Week[];
  assignments: Assignment[];
}

export interface Week {
  lessons: Lesson[];
  title: string;
}

export interface Lesson {
  date: string;
  topic: string;
  reading?: Link[];
}
