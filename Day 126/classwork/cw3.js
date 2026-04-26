// 3) map - მეთოდის გამოყენებით numbers - მასივში არსებული თითო ელემენტი გადაამრავლეთ 2 - ზე, და გამოიტანეთ ახალი მასივი ისეთი მნიშვნელობებით რომლებმაც მოცემული ოპერაცია გაიარა


const numbers = [2, 4, 5, 6, 7];
const square = numbers.map(number => {
    return number  * 2
});
console.log(square);

