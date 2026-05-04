// 5) შექმენით Form, სადაც დაამატებთ age input-ს. დაამატეთ ვალიდაცია, რომ შეამოწმოთ მომხმარებელს მხოლოდ რიცხვები შემოჰყავს თუ არა. თუ ეს კრიტერიუმი არ შესრულდება - alert-ით გამოიტანეთ შესაბამისი მესიჯი. მომხმარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ ამ კრიტერიუმს არ შეასრულებს.


const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const age = document.getElementById('age').value;

    if(age.length === 0){
        alert("You must enter your age!!")
        return;
    }

    if(isNaN(age)){
        alert('age must be a Number!!')
        return;
    }

})