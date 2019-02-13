export class User {
    id: number;
    username: string;
    password: string;
    section: string;
    firstName: string;
    lastName: string;
    token: string;
}

export class Users {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        section: string,
        public firstName: string,
        public lastName: string,
        public token: string,
    ) {}
}
