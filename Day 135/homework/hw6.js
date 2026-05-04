// 6) შექმენით ღილაკი, რომელიც დაჭერისას ახალ <li> ელემენტს დაამატებს  დალაგებულ list-ში მსგავს ფორმატში:
// Item 1  
// Item 2  
// Item 3




const ol = document.getElementById('ol');
const btn = document.getElementById('btn');

let count = 0;

btn.addEventListener('click', () =>{
    count++;

    const li = document.createElement('li')
    li.textContent = 'item' + count;
    ol.appendChild(li);u
})
