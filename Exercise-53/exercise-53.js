function sum(...num) {
    return num.reduce((tosum, number) => {
        return tosum + number
    })
}

console.log(sum(1, 2, 3, 4, 5));



// function sum(...numbers) 
// { return numbers.reduce((prev, curr) => prev + curr, 0); } 
// console.log(sum(1, 2, 3, 4, 5));

