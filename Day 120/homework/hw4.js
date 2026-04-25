// 4) შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ყველა ელემენტის ჯამს.


const sum = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum;
}

console.log(sum([2, 3, 4, 5]));



let array = [2, 5, 7, 19, 10];

const sum = array.reduce((acc, currValue) => acc + currValue, 0)

console.log(sum)