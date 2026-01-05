// 3) შექმენით ორი სახელების სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიგივე წევრებს სიები 
// თუ შეიცავს - mutualNames სიაში დაამატეთ საერთო ელემენტები.


let names1 = ["Gvanca", 'giorgi', 'venera'];
let names2 = ['iconic me', 'gvanca', 'venera'];


let mutualNames = [];

for(let i = 0; i < names1.length; i++){
    for(let x = 0; x < names2.length; x++){
        if (names1[i] === names2[x]){
            mutualNames.push(names1[i])
        }
    }
};  