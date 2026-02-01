// 2) შექმენით 6-ელემენტიანი მასივი. გამოიყენეთ at() პირველი და ბოლო ელემენტების დასაბეჭდად. შემდეგ კი სიიდან ამოშალეთ ყველა ის ელემენტი, რომელთა სიგრძეც 5-ს აღემატება.


const fruits = ['apple', 'pear', 'melon', 'watermelon', 'grape', 'coconut', 'smoothie']

console.log(fruits.at(0))    // 'apple'
console.log(fruits.at(-1))   // 'smoothie'

for (let i = fruits.length -1; i >= 0; i--) {
    if (fruits[i].length > 5) {
        fruits.splice(i, 1)
        console.log(fruits)
    }
}