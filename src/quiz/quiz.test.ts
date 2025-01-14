import { describe, expect, it } from "vitest";
import { Quiz, QuizParam } from "./quiz";
import { questionMock } from "../question/questionMock";

const quizParam: QuizParam = {
  description: 'Simple JavaScript Quiz',
  title: "JS Quiz",
  questions: questionMock

}

describe('quiz test', async () => {

  it('should quiz exists', async () => {

    const quiz = new Quiz(quizParam)
    expect(quiz).toBeTruthy()

  })

  it('should had required property', async () => {

    const quiz = new Quiz(quizParam)

    expect('id' in quiz).toBeTruthy()
    expect(quiz.id).to.not.toBeFalsy()
    expect('title' in quiz).toBeTruthy()
    expect(quiz.title).to.not.toBeFalsy()
    expect('description' in quiz).toBeTruthy()
    expect(quiz.description).to.not.toBeFalsy()
    expect('questions' in quiz).toBeTruthy()
    expect(quiz.questions).to.not.toBeFalsy()
  })


})
