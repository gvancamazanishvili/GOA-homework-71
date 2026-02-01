// 1) დაწერეთ საშინაო დავალებაში მოცემული სავარჯიშო (რაც დღეს გავარჩიეთ), თუმცა ეს პროგრამა უნდა იყოს case-insensitive

// მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

const password = 'admin123'
let userPass = prompt("Enter password Access: ")

while(userPass.toLowerCase() !== password.toLowerCase()){
    console.log('wrong password, try again')
    userPass = prompt("Enter password Access: ")
}
console.log('Access Granted')