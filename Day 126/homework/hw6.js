// 6) მოიძიეთ ინფორმაცია reduce მეთოდის შესახებ js - ში ახსენით მისი დანიშნულება და კარგად გაიაზრეთ მისი მუშაობა, შემდეგ კი შექმენით მასივი სადაც შეინახავთ რიცხვებს და reduce მეთოდის გამოყენებით გამოიტანთ მოცემული რიცხვების ჯამს



const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums)

