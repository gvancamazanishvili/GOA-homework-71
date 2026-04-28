// 6) მოცემულია მასივი:
// words = ["python", "java", "c", "javascript", "go"]
// გამოიყენეთ:
// filter → დატოვეთ სიტყვები, რომელთა სიგრძეც აღემატება 3-ს.
// map → გადაიყვანეთ დიდ ასოებად.
// reduce → გააერთიანეთ ერთ წინადადებად.


const words = ["python", "java", "c", "javascript", "go"];

const moreThen3 = words.filter(word => {
    return word.length > 3
});

const upperCase = moreThen3.map(letter => {
    return letter.toLocaleUpperCase()
});

const sentence = upperCase.reduce((acc, CurValue) => {
    return acc + CurValue
});

console.log(sentence)