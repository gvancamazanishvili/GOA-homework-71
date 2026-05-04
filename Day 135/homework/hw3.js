// 3) HTML-ში შექმენით პარაგრაფი, რომელშიც ჩაწერთ 'Hello'-ს. დაამატეთ ღილაკი სახელით Change text. ღილაკზე დაჭერამ პარაგრაფის ტექსტი უნდა შეცვალოს 'Hello' -> 'Hello Javascript'


const p = document.getElementById('p');
const btn = document.getElementById("btn");


btn.addEventListener('click', () =>{
    p.textContent = 'hello JavaScript'
})

