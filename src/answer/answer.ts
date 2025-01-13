import { UUID, uuid } from "../utils/uuid"

export interface AnswerData {
  text: string,
  description: string
}

export class Answer {

  public id: UUID
  public text: string
  public description: string

  constructor({ text, description }: AnswerData) {
    this.text = text,
      this.description = description
    this.id = uuid()
  }


  public equals(answer: Answer) {
    return this.text === answer.text
  }
}
