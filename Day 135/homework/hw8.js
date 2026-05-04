// ❗BONUS❗
// 8) შექმენით counter.
// გექნებათ ერთი h1, რომელიც default-ად 0 იქნება. დაამატეთ ორი ღილაკი - increase და decrease. increase ღილაკზე დაჭერამ heading-ის ტექსტი (რიცხვი) ერთით უნდა გაზარდოს. decrease-მა კი პირიქით უნდა შეამციროს.




const counter = document.getElementById('h1');
const add = document.getElementById('Add');
const minus = document.getElementById('Minus');



add.addEventListener('click', () =>{
    counter.textContent ++;
})


minus.addEventListener('click', () => {
    counter.textContent --;
})