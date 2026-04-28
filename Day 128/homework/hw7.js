// 7) შექმენით პროგრამა, რომელიც იღებს რიცხვების სიას. გამოიყენეთ map(), filter() და reduce(), რომ:
// filter → დატოვოთ მხოლოდ დადებითი რიცხვები.
// map → აიყვანოთ დადებითი რიცხვები კვადრატში.
// reduce → იპოვოთ რიცხვთა ჯამი.



const numbers = [3, 4,5, -67, 7,8, ,-35, 6, 7, -100];


const positiveNums = numbers.filter(num =>{
    return num > 0
});
console.log(positiveNums)
const square = positiveNums.map(num => {
    return num **  2
});
console.log(square)
const sum = square.reduce((acc, currValue) => {
    return acc + currValue
});
console.log(sum)
