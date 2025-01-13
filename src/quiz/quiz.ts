import { Question } from "../question/question";
import { UUID } from "../utils/uuid";


export interface QuizData {

  id: UUID
  title: string
  description: string
  questions: Question[]
}

export class Quiz {

  public id: UUID
  public title: string
  public description: string
  public questions: Question[]

  constructor({ id, title, description, questions }: QuizData) { }



}
