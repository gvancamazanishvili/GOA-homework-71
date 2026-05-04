// 2) შექმენით image slider-ი 5 ფოტოს გამოყენებით. გასტილეთ როგორც ფოტოები, ასევე ღილაკები. დიზაინი მაქსიმალურად დახვეწეთ. ყოველ next ღილაკზე დაკლიკებამ უნდა შეცვალოს საიტის background-ი და ასევე ფოტოს ბორდერის ფერი. previous ღილაკზე დაჭერისას კი Heading-ი "Image Slider"-ი უნდა დაპატარავდეს.

let imgs = [
    "./images/img1.png", 
    "./images/img2.png", 
    "./images/img3.png", 
    "./images/img4.png", 
    "./images/img5.png", 
]



const img = document.getElementById('img');
const Next = document.getElementById('next');
const Prev = document.getElementById('prev');


let index = 0;

const next = () => {
    index ++;
    if(index >= imgs.length){
        index = 0;
    }
    img.src = imgs[index]
}


const prev = () => {
    index --;
    if(index < 0){
        index = imgs.length - 1
    }

    img.src = imgs[index]
}


Next.addEventListener('click', next);
Prev.addEventListener('click', prev);