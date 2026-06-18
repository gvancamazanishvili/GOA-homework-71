    // 2) შექმენი ობიექტი user, კუთვნილებებით: name, age, city. თქვენი ამოცანაა დესტრუქტურიზაციის გამოყენებით ამოიღოთ ცვლადებში name, age და city.


const user  =  {
    name:  "gvanca",
    age: 16,
    city: "Rustavi"
}


const {name, age, city} = user;
console.log(name);
console.log(age);
console.log(city);
