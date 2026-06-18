// შექმენით Counter, სადაც გექნებათ 2 ღილაკი:
// Add და Minus. როდესაც რიცხვი დადებითი იქნება Background უნდა გამწვანდეს, როდესაც უარყოფითი იქნება - წითელი გახდეს. ხოლოდ 0-ის შემთხვევაში - იყოს ლურჯი. ამ პროგრამას დაუმატეთ Local Storage, ისე რომ საიტის თავიდან გახსნის დროს შეინახოს რიცხვიც და background-ის ფერიც.


const counter = document.getElementById('counter');
const add = document.getElementById('Add');
const minus = document.getElementById('Minus');



const bgChange = () => {
    if(Number(counter.textContent) == 0) {
        document.body.style.backgroundColor = '#000041'
        counter.style.color = 'white'
        localStorage.setItem('color', 'Blue')
    }
    
    if(Number(counter.textContent) < 0){
        document.body.style.backgroundColor = '#540202'
        counter.style.color = 'white'
        localStorage.setItem('color', 'Red')
    }

    if(Number(counter.textContent) > 0){
        document.body.style.backgroundColor = '#004124'
        counter.style.color = 'white'
        localStorage.setItem('color', 'Green')
    }
}

add.addEventListener('click', () => {
    counter.textContent ++ 
    localStorage.setItem('counter', counter.textContent)
    bgChange();

})



minus.addEventListener('click', () => {
    counter.textContent --
    localStorage.setItem('counter', counter.textContent)
    bgChange();
})



const SavedNum = localStorage.getItem('counter')
if(SavedNum){
    counter.textContent = SavedNum
}