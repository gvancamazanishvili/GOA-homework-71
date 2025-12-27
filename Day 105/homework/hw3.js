// 3) age ცვლადში შეინახეთ prompt-ის საშუალებით შემოტანილი მომხმარებლის ასაკი. გამოიყენეთ Ternary Operator, რომ დაბეჭდოთ:
// 'Adult' თუ მოხმარებლის ასაკი 18 წელზე მეტია, 'teen' თუ 13-დან 17-ის ჩათვლითაა, ხოლო 'child' ყველა სხვა შემთხვევაში.

const age = prompt("Enter your age: ")

let isAdult = age > 18 ? "Adult" :  age >= 13 && age <= 17 ? 'Teen' : age < 13 ? "Child" : NaN
console.log(isAdult)


