// 3) მოცემულია მასივი:
// words = ["Hello", " ", "World", "!"]
// გამოიყენეთ reduce(), რომ შეაერთოთ ყველა ელემენტი ერთ სტრინგად.

const words = ["Hello", " ", "World", "!"];

const string = words.reduce((acc, CurrValue) => {
    return acc + CurrValue
});

console.log(string)