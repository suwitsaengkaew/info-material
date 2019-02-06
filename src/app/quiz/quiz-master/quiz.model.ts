export class QuizExamModel {
    constructor(
        public questionno: string,
        public question: string,
        public answer: QuizAnswerModel[]
    ) {}
}

export class QuizAnswerModel {
    constructor(
        public questionno: string,
        public answer: string,
        public finalanswer: boolean
    ) {}
}

export class UsernameModel {
    constructor(
        public username: string,
        public password: string,
        public section: string
    ) {}
}
