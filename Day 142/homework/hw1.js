// მიიყვანეთ საბოლოო დონემდე სარეგისტრაციო ფორმის პროექტი. შეგახსენებთ, რომ სრულყოფილად უნდა გქონდეთ სტრუქტიურა + დიზაინი + ფუნქციონალი (ვალიდაციები)
// Main task: პროექტში ვალიდაციების დროს alert-ის მაგივრად მომხმარებელს დაუკმაყოფილებელი კრიტერიუმის შესახებ ინფორმაცია გამოუტანეთ შესაბამისი Input-ის ქვემოთ წითელი ფერის პარაგრაფით.


//  მაგ. თუ მომხმარებლის სახელი და გვარი 5 სიმბოლოს არ აღემატება -> Name input-ის ქვემოთ submit მოვლენის შემდეგ გამოიტანეთ ტექსტი 'Name & Surname should be at least 5 letters'.
// ასევე, თუ Password და Confirm Password ველები არ ემთხვევა ერთმანეთს - ორივე input-ის ქვემოთ გამოიტანთ 'Passwords do not match'. 
// გამოგადგებათ Event Listeners, textContent, DOM Manipulation...


const form = document.getElementById('form');


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('Email').value;
    const pass = document.getElementById('pass').value;
    const repeatPass = document.getElementById("repeatPass").value;


    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError')

    nameError.textContent = ""
    emailError.textContent = ""
    passError.textContent = ""

    if(fullName.length < 5){
        nameError.textContent = "Your name is too short"
        nameError.style.color = 'red'
        nameError.style.fontSize = '10px'
    }
    if(!email.includes("@")){
        emailError.textContent = "Your email must include @"
        emailError.style.color = 'red'
        emailError.style.fontSize = '10px'
    }

    if(pass != repeatPass){
        passError.textContent = "Passords do not match"
        passError.style.color = "red"
        passError.style.fontSize = "10px"
    }
} )