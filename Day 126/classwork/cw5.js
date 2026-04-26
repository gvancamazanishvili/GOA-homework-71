// 5) numbers მასივი გაფილტრეთ ისეთი რიცვებისგან რომლებიც მეტია 5 - ზე


const nums = [2, 4, 6, 8, 9, 10, 12, 5, 6];


const moreThenFive = nums.filter(num =>{
    return num > 5
})

console.log(moreThenFive);