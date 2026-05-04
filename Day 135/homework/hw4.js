// 4) შექმენით ღილაკი, რომელიც დაჭერისას body-ს background color-ს შეცვლის (მაგალითად lightblue-ზე). ასევე დაამატეთ საიტზე ფოტოც. ამავე ღილაკზე mouseover-მა უნდა გაადიდოს ფოტოს სიგანე, mouseout-მა კი დააპატარაოს.


const btn = document.getElementById('btn');
const img = document.getElementById('img');



btn.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'lightblue'
})


btn.addEventListener("mouseover", () =>{
    img.style.width = '400px'
})

btn.addEventListener('mouseout', () => {
    img.style.width = ''
})

