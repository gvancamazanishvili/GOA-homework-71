// 1) ჩამოწრეთ ყველა ის იტერატორის მეთოდი რომლებიც თქვენ იცით, თითოეულის დანიშნულება ახსენით კომენტარების სახით


// .forEach() ---> უშვებს რაიმე კონმკრეტულ კოდს მასისვის თითოეული ელემენტისთვის 
const groceries = ['apple', 'oragne', 'milk'];
groceries.forEach(groceryItem => console.log(groceryItem));

// .map() ---> იღებს call back ფუნქციას და აბრუნებს ახალ მასივს 
const nums = [2, 4, 5, 6, 7];
const square = nums.map(number => {
    return number  * 2
});
console.log(square)

// .filter() ---> ის ძალიან გავს map მეთოდს, ერთადერთი ის განსხვავებაა რომ ახალ მასივ ს ის აბრუნებს იმის შემდეგ რაც გარკვეული პირობის შემდეგ true ან false იქნება მისი პასუხი 
const fruits = ['rasin', 'pomme', 'abricot', 'peche', 'frises'];

const words = fruits.filter(word => {
    return word.length > 5;
});
console.log(words)  

// .findIndex() --->  აბრუნებს იმ კონმკრეტულ ინდექსს რომელსზეც მდებაარეობს ეს ელემენტი 

const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

// .reduce() ---> შემცირება, ეს მეთოდი აბრუნებს მხოლოდ ერტ მნიშვნელობას. იგი იღებს ორ პარამეტრს, აკუმულატორს ანუ საბოლოო მნიშვნელობას და ეხლანდელ მნიშვნელობას. აკუმულატორს არ აქვს ავტომატურად გაწერილი საწყისი ნიშვნელობა, ამიტომაც ჩვენთითონ უნდა  გავუწეროთ  კონკეტულ მაგალითებში 

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums)