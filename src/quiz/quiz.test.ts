import { describe, expect, it } from "vitest";
import { Quiz } from "./quiz";




describe('quiz test', async () => {


  it('should quiz exists', async () => {

    const quiz = new Quiz()

    expect(quiz).toBeTruthy()

  })

  it('should had required property', async () => {

    const quiz = new Quiz()

    console.log(quiz.id)

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
