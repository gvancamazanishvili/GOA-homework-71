// 2) გამოიყენე fetch() და .then() მეთოდი, რათა წამოიღო მომხმარებლების სია Api-დან: (https://jsonplaceholder.typicode.com/users).
//  დაბეჭდე კონსოლში მხოლოდ მომხმარებლების სახელი (name) და ელ-ფოსტა (email).


const users = fetch("https://jsonplaceholder.typicode.com/users");

users
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        data.forEach(user => {
            console.log(`Username: ${user.username}, Email: ${user.email}`)
        });
    })
    .catch((err) => {
        console.log(err);
    });