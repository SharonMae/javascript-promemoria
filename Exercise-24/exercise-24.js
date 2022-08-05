const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

Object.values(person).forEach((value) => console.log(`${value}`))
// Print values of person using Object.values