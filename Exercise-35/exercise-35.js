class Person {
    constructor(firstName, nickName, lastName) {
        this.firstName = firstName
        this.nickName = nickName
        this.lastName = lastName
    }
}

class Developer extends Person {
    constructor(firstName, nickName, lastName, role) {
        super(firstName, nickName, lastName)
        this.role = role
    }
}

const developer = new Developer('Sharon', 'Mae', 'Duran', 'Junior Front-end Developer Student');
console.log(`${developer.firstName} ${developer.nickName} ${developer.lastName} - ${developer.role}`)