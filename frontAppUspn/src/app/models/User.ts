export class User {
    id : number |undefined;
    email: string | undefined;
    username: string | undefined;
    password: string | undefined;
    type: string | undefined;

    constructor( id? : number ,email?: string, username?: string, password?: string, type?: string) {
        this.id=id
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
    }
}
