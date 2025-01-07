
import { describe, expect, it } from "vitest";
import { Question, QuestionConfig, QuestionData } from "./question";
import { Answer } from "../answer/answer";
import { answerMocks } from "../answer/answerMock";
import { MultipleAnswerPolicy, SingleAnswerPolicy } from "./questionValidationPolicy";

const a1 = new Answer(answerMocks[0])
const a2 = new Answer(answerMocks[1])
const a3 = new Answer(answerMocks[2])

const label = 'first sample question'
const answers = [a1, a2, a3]

const singleGoodAnswer = [a2.id]

const multipleGoodAnswers = [a2.id, a3.id]



describe('question testes', () => {

    it('should had required property', async () => {

        const questionData: QuestionData = {
            label,
            answers,
            goodAnswers: singleGoodAnswer
        }
        const question = new Question(questionData)

        expect('label' in question).toBeTruthy()
        expect('answers' in question).toBeTruthy()
        expect('goodAnswers' in question).toBeTruthy()
    });

    it('should contain at least two answer', async ()=>{

        const singleAnswerQuestion: QuestionData = {
            label,
            answers: [a1],
            goodAnswers: singleGoodAnswer
        }

        const multipleAnswerQuestion: QuestionData = {
            label,
            answers: [a1, a2],
            goodAnswers: singleGoodAnswer
        }

        const questionConfig: QuestionConfig = {
            validation: new MultipleAnswerPolicy()
        }

        expect(() =>new Question(singleAnswerQuestion, questionConfig) ).toThrowError(/number of answers are lower than/i)
        expect(() =>new Question(multipleAnswerQuestion, questionConfig) ).not.toThrowError()

    });
    it('should contain at least one good answer', ()=> {

        const singleAnswerQuestion: QuestionData = {
            label,
            answers: [a1],
            goodAnswers: []
        }


        const questionConfig: QuestionConfig = {
            validation: new MultipleAnswerPolicy()

        }
        expect(() =>new Question(singleAnswerQuestion, questionConfig) ).toThrowError(/number of good answers are lower than/i)
    });

    it.todo('should contain an label');
    it.todo('should contain at least two answer different from each other based based on text');
    it.todo('should can be configured how many answers and allowed ');
    it.todo('should contain a explanation when are provided');
    it.todo('should ');
    it.todo('should ');
    it.todo('should ');
    it.todo('should ');
    it.todo('should ');

})