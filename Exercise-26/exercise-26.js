function Person(firstName, nickName, lastName) {
    this.firstName = firstName,
    this.nickName = nickName,
    this.lastName = lastName,
    this.fullName = function() {
        return `${firstName} ${nickName} ${lastName}`
    }
}


const sharon = new Person('Sharon', 'Mae', 'Duran')
const rose = new Person('Rose', "Marie", 'Ortega')

console.log(sharon.fullName()); // Sharon Mae Duran
console.log(rose.fullName()); // Rose Marie Ortega





  
  
  