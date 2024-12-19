
export interface AnswerData {
    text:string,
    description:string
}

export class Answer{

    public id: ReturnType<Crypto['randomUUID']>
    public text:string
    public description:string

    constructor({text, description}:AnswerData){
        this.text = text,
        this.description= description
        this.id = crypto.randomUUID()
    }

}