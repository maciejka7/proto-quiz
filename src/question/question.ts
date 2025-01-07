import { Answer } from "../answer/answer";
import { QuestionValidationPolicy, SingleAnswerPolicy } from "./questionValidationPolicy";

export interface QuestionData {
    label: string,
    answers: Answer[],
    goodAnswers: Answer['id'][],
    explanation?: string
}

export interface QuestionConfig {
    validation: QuestionValidationPolicy
}

export class Question {

    public label: string
    public answers: Answer[]
    public goodAnswers: Answer['id'][]
    public explanation?: string

    /**
     *
     * @private
     * @type {QuestionValidationPolicy}
     * @memberof Question
     */
    public validation: QuestionValidationPolicy

    public constructor(params: QuestionData, config?: QuestionConfig) {

        this.validation = config?.validation || new SingleAnswerPolicy()

        const { label, answers, goodAnswers, explanation } = params

        const { error, message } = this.validation.validate(answers, goodAnswers)
        if (error) {
            throw new Error(message)
        }

        this.label = label
        this.answers = answers
        this.goodAnswers = goodAnswers
        this.explanation = explanation


    }

    public validateQuiz() { }
}