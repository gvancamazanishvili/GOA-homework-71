// 4) შექმენით რიცხვების სია. პირველ რიგში გაიგეთ რიცხვთა ჯამი, შემდეგ კი მათი ნამრავლი - reduce() ის გამოყენებით.



const numbers = [2, 4, 5, 6, 7, 8];


const sum = numbers.reduce((acc, curValue) => {
    return acc + curValue
})

console.log(sum)

const multyply = numbers.reduce((acc, curValue) => {
    return acc * curValue
})

console.log(multyply)