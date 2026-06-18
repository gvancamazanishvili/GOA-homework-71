// 4) შექმენით ორი მასივი: fruits1, fruits2. შექმენით მესამე მასივი allFruits, რომელიც შეიცავს ორივე მასივის ელემენტებს Spread ოპერატორის გამოყენებით.


const fruits1 = ['apple', "mango", "watermelon"];
const fruits2 = ['Orange', "Strawberry", "Melon"];


const allFruits = [...fruits1, ...fruits2];

console.log(allFruits)