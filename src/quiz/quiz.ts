import { Question } from "../question/question";
import { uuid, UUID } from "../utils/uuid";


export interface QuizParam {
  title: string
  description: string
  questions: Question[]
}

export class Quiz {

  public id: UUID
  public title: string
  public description: string
  public questions: Question[]

  constructor({ title, description, questions }: QuizParam) {

    this.id = uuid()
    this.title = title
    this.description = description
    this.questions = questions

  }



}
