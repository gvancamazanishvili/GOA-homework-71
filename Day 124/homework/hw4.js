// 4) შექმენით Arrow ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ყველა ელემენტის ჯამს. შეასრულეთ ერთ ხაზში.


const sum = (arr) => {
    const sum = arr.reduce((acc, currValue) => acc + currValue, 0)
    return sum
}

console.log(sum([2, 4, 5, 6, 7]))
