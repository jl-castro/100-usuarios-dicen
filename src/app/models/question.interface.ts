export interface Question {
  question: string;
  answer: Answer[];
}

export interface Answer {
  option: string;
  quantity: number;
}
