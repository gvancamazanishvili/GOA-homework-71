// 5) მოცემულია სია:
// nums = [1,2,3,4,5,6,7,8,9,10]
// გამოიყენეთ:
// filter → დატოვეთ მხოლოდ ლუწები.
// map → ლუწი რიცხვები გაამრავლეთ 3-ზე.
// reduce → ბოლოს იპოვეთ დარჩენილ რიცხვთა ჯამი.


const nums = [1,2,3,4,5,6,7,8,9,10] 

const even = nums.filter(num => {
    return num % 2 === 0
})

console.log(even)

const multyply = even.map(num => {
    return num * 3
});

console.log(multyply)

const left = multyply.reduce((acc, curValue) => {
    return acc + curValue
});

console.log(left);