// 4) მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.


const password = 'admin123'


let userPass = prompt("Enter password Access: ")

while(userPass !== password){
    console.log('wrong passsword, try again')
        userPass = prompt("Enter password Access: ")
}
console.log('Access Granted')