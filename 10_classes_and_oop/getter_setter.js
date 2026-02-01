class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Chayan`
    }

    set password(value){
        this._password = value
    }
}

const Chayan = new User("c@Chayan.ai", "abc")
console.log(Chayan.email);