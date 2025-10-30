
export interface Option {
  text_en: string;
  text_vn: string;
  is_correct?: boolean;
}

export interface Question {
  id: number;
  unit: string;
  topic: string;
  question_en: string;
  question_vn: string;
  options: Option[];
  explanation_en: string;
  explanation_vn: string;
  citation: string;
}
