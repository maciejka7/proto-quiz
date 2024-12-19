import {describe, expect, it} from 'vitest'
import {Answer} from './answer'
import { mockAnswer } from './answer.mock';

describe('answer VO tests', () => {

    it('should should create answer object with properties', async () => {

        const answer = new Answer(mockAnswer)
        const properties = ['id','text','description']

        properties.forEach(prop => ( expect(answer[prop]).toBeTruthy()))
        
    });


    
});