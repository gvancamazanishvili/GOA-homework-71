// 7) შექმენით counter-ი 'მთვლელი" და 2 ღილაკი '+' და '-' ღილაკებზე დაკლიკების შედეგად counter ი უნდა იცვლებოდეს ემატებოდეს/აკლდებოდეს 1-ი, საიტის დარეფრეშებისას ან ჩახურვისას იგივე  უნდა დარჩეს counter ის ველიუ და არ უნდა განულდეს



const counter = document.getElementById('counter');
const add = document.getElementById('add');
const minus = document.getElementById('minus');




add.addEventListener('click', () => {
    counter.textContent ++
    localStorage.setItem('count', counter.textContent)
})

minus.addEventListener('click', () => {
    counter.textContent --
    localStorage.setItem('count', counter.textContent)
})

const Saved = localStorage.getItem('count');
if(Saved){
    counter.textContent = Saved
}