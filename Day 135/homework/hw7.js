// 7) მეექვსე დავალების სიაზე დაამატეთ ასეთი ფუნქციონალი:
// დაუმატეთ სიას remove ღილაკი.
// ღილაკზე დაჭერისას სიის ბოლო ელემენტი  უნდა წაიშალოს. (გაიხსენეთ დღეს ნასწავლი მეთოდი).


const ol = document.getElementById('ol');
const btn = document.getElementById('btn');
const removeBtn = document.getElementById('remove-item')


let count = 0;

btn.addEventListener('click', () =>{
    count++;

    const li = document.createElement('li')
    li.textContent = 'item' + count;
    ol.appendChild(li);
})


removeBtn.addEventListener('click', () => {
    const lastItem = ol.lastChild;
    ol.removeChild(lastItem)
    count--;
})
