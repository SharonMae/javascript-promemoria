const person = {
    get firstName() {
        return this.name
    },
    set firstName(firstName) {
        this.name = firstName
    },
    get nickName() {
        return this.nick
    },
    set nickName(nickName) {
        this.nick = nickName
    },
    get lastName() {
        return this.surname
    },
    set lastName(lastName) {
        this.surname = lastName
    },
    fullName() {
        return `${this.firstName} ${this.nickName} ${this.lastName}`
    }
}

const sharon = Object.create(person)

sharon.firstName = "Sharon";
sharon.nickName = "Mae";
sharon.lastName = "Duran";

const rose = Object.create(person)
rose.firstName = "Rose";
rose.nickName = "Marie";
rose.lastName = "Ortega";

console.log(sharon.fullName()); // Sharon Mae Duran
console.log(rose.fullName()); // Marie Rose Ortega