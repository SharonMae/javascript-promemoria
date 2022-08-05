// Class definition

class Person {
    constructor(firstName, nickName, lastName) {
        this.firstName = firstName
        this.nickName = nickName
        this.lastName = lastName
    }
}

const developer = new Person('Sharon', 'Mae', 'Duran');
console.log(`${developer.firstName} ${developer.nickName} ${developer.lastName}`)