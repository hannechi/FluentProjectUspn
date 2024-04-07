export class User {

    email: string | undefined;
    username: string | undefined;
    password: string | undefined;
    type: string | undefined;

    constructor(email?: string, username?: string, password?: string, type?: string) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
    }
}
