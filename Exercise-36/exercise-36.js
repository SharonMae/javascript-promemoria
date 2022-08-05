class Person {
    constructor(firstName, nickName, lastName, role) {
        this.firstName = firstName
        this.nickName = nickName
        this.lastName = lastName
        this.role = role
    }
    static fromObject() {
        return new Object(obj)
    }
}

const obj = {
    firstName: 'Sharon',
    nickName: 'Mae',
    lastName: 'Duran',
    role: 'Junior Front-end Developer Student'
}

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.nickName} ${person.lastName} - ${person.role}`)