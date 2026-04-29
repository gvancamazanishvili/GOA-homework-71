// 1) შექმენით person ობიექტი, დაამატეთ მასში ოთხი key: firstName, lastName, age, height, შემდეგ წაშალეთ age, height შეცვალეთ და საბოლოოდ დაპრინტეთ ობიექტი

const person = {
    firstName: "gvanca", 
    lastName: "Mazanishvili", 
    age: 16, 
    height: 165.5
};


delete(person.firstName);
delete(person.age);
person.height = 189;


console.log(person)