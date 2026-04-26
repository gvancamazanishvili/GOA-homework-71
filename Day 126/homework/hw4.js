// 4) შექმენით მასივი სადაც შეინახავთ  სხვადასხვა სახეობის ხილს, თქვენი დავალებაა, რომ forEach მეთოდის გამოყენებით ცალ - ცალკე გამოიტანოთ ხილის სახელები ისე, რომ წინ ეწეროს My favorite fruit is - ხილის სახელი, აგრეთვე ახსენით აბრუნებს თუ არა forEach - მნიშვნელობას, და რითი განსხვავდება ის ტრადიციული for loop - სგან


const fruits = ['apple', 'orange', 'melon', 'grape'];

const sentence = fruits.forEach(word => {
    console.log(`My favorite Fruit is ${word}`)
});
