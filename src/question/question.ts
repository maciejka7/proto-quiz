import { Answer } from "../answer/answer";
import { assert } from "../utils/assert";
import { QuestionValidationPolicy, SingleGoodAnswerPolicy, ValidationParams } from "./questionValidationPolicy";

export interface QuestionData {
    label: string,
    answers: Answer[],
    goodAnswers: Answer['id'][],
    explanation?: string
}

export interface QuestionConfig {
    validation?: QuestionValidationPolicy
    minNumberOfAnswers?: number
    maxNumberOfAnswers?: number
}

export class Question {

    public label: string
    public answers: Answer[]
    public goodAnswers: Answer['id'][]
    public explanation?: string

    private validation: QuestionValidationPolicy

    private defaultConfiig: QuestionConfig = {
        validation: new SingleGoodAnswerPolicy(),
        minNumberOfAnswers: 2,
        maxNumberOfAnswers: 4,
    }

    public constructor(params: QuestionData, config?: QuestionConfig) {

        assert(this.defaultConfiig.validation)
        assert(this.defaultConfiig.minNumberOfAnswers)
        assert(this.defaultConfiig.maxNumberOfAnswers)

        this.validation = config?.validation || this.defaultConfiig?.validation

        const { label, answers, goodAnswers, explanation } = params

        const validationParams: ValidationParams = {
            answers,
            goodAnswers,
            max: config?.maxNumberOfAnswers || this.defaultConfiig.maxNumberOfAnswers,
            min: config?.minNumberOfAnswers || this.defaultConfiig.minNumberOfAnswers,
        }

        const { error, message } = this.validation.validate(validationParams)

        if (error) {
            throw new Error(message)
        }

        this.label = label
        this.answers = answers
        this.goodAnswers = goodAnswers
        this.explanation = explanation
    }

}