// 5) შექმენით div-ი. როდესაც მაუსს მიიტანთ div-ზე - მისი ფერი გახდეს ლურჯი როცა მაუსს მოაშორებთ კი დაბრუნდეს თეთრ ან შავ ფერზე.


const div = document.getElementById('div');


div.addEventListener('mouseover', () =>{
    div.style.backgroundColor = 'blue'
})

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'black'
})