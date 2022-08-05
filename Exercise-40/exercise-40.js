class Person {
    constructor(firstName, nickName, lastName, age) {
        this.firstName = firstName
        this.nickName = nickName
        this.lastName = lastName
        this.age = age
    }
    get firstName() {
        return this._firstName
    }
    set firstName(name) {
        this._firstName = name
    }
    get nickName() {
        return this._nickName
    } 
    set nickName(nick) {
        this._nickName = nick
    }
    get lastName() {
        return this._lastName
    }
    set lastName(surname) {
        this._lastName = surname
    }
    get age() {
        return this._age
    }
    set age(year) {
        this._age = year
    }

    get fullName() {
        return `${this._firstName} ${this._nickName} ${this._lastName}`
    }
}

const person = new Person('Sharon', 'Mae', 'Duran', 20);
console.log(person.fullName);

person.firstName = 'Rose';
person.nickName = 'Marie';
person.lastName = 'Ortega';
console.log(person.fullName);