// 8) ახსენით Template literal-ის სინტაქსი და ჩამოწერეთ თუ რა მსგავსებები/განსხვავებები აქვს პითონის f string-თან შედარებით.


//  Template literal - string literal - არის გზა რომ სხვადასხვა მონაცემის ტიპი დავწეროთ ერთად ერთ წინადადებაში. ეს არის F"" – f სტრინგის javaScript -ის ვერსიაა. სინტაქსურად f"" სტრინგში ჩვენ {} (ფიგურულ ფრჩხილებში) ვწერთ ცვლადის სახელს

//  javaScripts - განსხვავებული სინტაქსი აქვს. პირველ რიგში ჩვენ სხვანაირ ბრჭყალებს ვიყენებთ (` `)
//  backticks  - უკანა ბრჭყალები  ამის შემდეგ ჩოულებრივ ვწერთ. როდესაც ცვლადების ჩასმასთან მიდგება საქმე ჩვენ ჯერ ვწერთ "$" (დოლარის ნიშანს), შემდეგ კი {} (ფიგურულ ფრილებს)



// მაგ: 

let myName = "Gvanca"
let myLastname = "Mazanishvili"
let myAge = 15
let myHeight = 165.6
let myFavCar = "Porche - Panamera"

console.log(`My name is ${myName}, my surname is ${myLastname}. i am ${age} years old and i am ${myHeight} tall. My favorite car is ${myFavCar}`)