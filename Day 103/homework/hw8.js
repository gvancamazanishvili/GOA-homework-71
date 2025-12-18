// 8) შექმენით ორი რიცხვითი ცვლადი.
// შეამოწმეთ:
// ორივე მეტია თუ არა 10-ზე (&&)
// ერთ-ერთი მაინც მეტია თუ არა 10-ზე (||)

const num1 = 20
const num2 = 7

if (num1 && num2 > 10){
    console.log('They are greater then 10')
}else if(num1 || num2 > 10){
    console.log("One of them is greater then 10")
}