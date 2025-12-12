// 2) შეასრულეთ მოცემული დავალებები

// 1. Create variables and manipulate the values.

let num1 = 39
let num2 = 40

console.log(num1)
console.log(num2)

num1 = 29
num2 = 30

console.log(num1)
console.log(num2)


// 2. Check what happens when you try concatenating strings using variables of different data types.


let name = "Gvanca"
let age = 15
let height = 165.9
let teen = true

console.log(name + name) // არ გამოაქ ერორი
console.log(name + age) // არ გამოაქ ერორი
console.log(name + height) // არ გამოაქ ერორი
console.log(name + teen)  // არ გამოაქ ერორი


// 3. Interpolate multiple variables into a string

let myName = "Gvanca"
let myLastname = "Mazanishvili"
let myAge = 15
let myHeight = 165.6

console.log(`My name is ${myName}, my surname is ${myLastname}. i am ${age} years old and i am ${myHeight} tall`)

// 4. See what happens when you use console.log() on variables declared by different keywords (const, let, var) before they’re defined. For example:

// console.log(name)
                            // error გამოაქვს 
// const name = "Gvanca"

// console.log(name)
                            // error გამოაქვს 
// let name  = "Gvanca"

// console.log(name)
                            // error გამოაქვს 
// var name = "gvanca"


// 5. Find the data type of a variable’s value using the typeof keyword on a variable.

let Name = "Gvanca"
console.log(typeof(Name))


// 6. Use typeof to find the data type of the resulting value when you concatenate variables containing two different data types.

let Namee = "Gvanca"
let num = 167
combo = Namee + num

console.log(typeof(combo))

