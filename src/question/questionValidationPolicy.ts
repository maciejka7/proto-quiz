import { Answer } from "../answer/answer";
import { AppError, errorFactory, noError } from "../error/errorFactory";

export interface ValidationError extends AppError { }

export interface QuestionValidationPolicy {
    validate: (answers: Answer[], goodAnswers: Answer['id'][]) => ValidationError
}


export class SingleAnswerPolicy implements QuestionValidationPolicy {

    private MIN_NUMBER_OF_ANSWERS = 2

    public validate(answers: Answer[], goodAnswers: Answer["id"][]) {
        return this.validateAnswersAmount(answers)
    };

    private validateAnswersAmount(answers: Answer[]): ValidationError {

        if(!answers.length) {
           return errorFactory('No answers provided') 
        }

        if (answers.length < this.MIN_NUMBER_OF_ANSWERS) {
            return errorFactory(`Number of answers are lower than ${this.MIN_NUMBER_OF_ANSWERS}`)
        }
        return noError()
    }

}

export class MultipleAnswerPolicy implements QuestionValidationPolicy {

    private MIN_NUMBER_OF_ANSWERS = 2

    public validate(answers: Answer[], goodAnswers: Answer["id"][]) {
        return this.validateAnswersAmount(answers)
    };


    private validateAnswersAmount(answers: Answer[]): ValidationError {

        if(!answers.length) {
           return errorFactory('No answers provided') 
        }

        if (answers.length < this.MIN_NUMBER_OF_ANSWERS) {
            return errorFactory(`Number of answers are lower than ${this.MIN_NUMBER_OF_ANSWERS}`)
        }

        return noError()
    }
}