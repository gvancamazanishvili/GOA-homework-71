// 4) გამოიყენე Dog API (https://dog.ceo/api/breeds/image/random).
// წამოიღე სურათის ლინკი, შექმენი HTML-ში <img> თეგი და ეს ლინკი ჩაუსვი src ატრიბუტად, რომ სურათი ეკრანზე გამოჩნდეს.



const dogs = fetch("https://dog.ceo/api/breeds/image/random");
const img = document.getElementById("dog");


dogs
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        img.src = data.message;
    })