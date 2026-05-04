// 4) შექმენით form, სადაც გექნებათ ინფუთები:
// • სახელი
// • პაროლი
// • ასაკი

// გამოიყენეთ Form ვალიდაცია, რომ შეამოწმოთ:
// • სახელის ინფუთი აღემატება თუ არა 1 სიმბოლოს.
// • პაროლი არის თუ არა 8 სიმბოლოზე მეტი.
// • ასაკი არის თუ არა 10-ზე მეტი.

// თუ რომელიმე კრიტერიუმი არ შესრულდება - alert-ით გამოიტანეთ შესაბამისი მესიჯი მაგ. სახელი უნდა იყოს 1 სიმბოლოზე მეტი, პაროლი უნდა აღემატებოდეს 8 სიმბოლოს და ა.შ. 
// მომხმარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ ამ კრიტერიუმებს არ შეასრულებს.


const form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    if(name.length <= 1){
        alert('name must be over 1')
        return;
    }
    if(pass.length <= 8 ){
        alert("password must be more the 8")
        return;
    }
    if(Number(age) <= 10){
        alert("age must be over 10")
        return;
    }

    alert("form was submited sucsessfuly")
})