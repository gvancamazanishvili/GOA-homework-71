// 6) შექმენით 2 ღილიაკი ერთი dark mode მეორე light mode დაკლიკებისას საიტის background-დს უნდა მიიჭოს შესაბამისი ფერი (შავი ან თეთრი) გამოიყენეთ localstorage რისი დახმარებითაც საიტის დახურვის შედეგად  ან გადარეფრეშების დროს არ უნდა დაუბრუნდეს backgound ი საწყის ფერს.




const btn1 = document.getElementById('light-btn');
const btn2 = document.getElementById('dark-btn');



btn1.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
    localStorage.setItem('theme', 'light')
})

btn2.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black'
    localStorage.setItem('theme', 'black')
})


const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    document.body.style.backgroundColor = savedTheme;
}
