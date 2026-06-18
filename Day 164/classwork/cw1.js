// შექმენით div-ი რომლის სიგრძე და სიგანე იქნება  200px ლი;; setinterval ის დახმარებით ყოველ 1 წამში დივი მარცხნიდან მარჯვისკენ უნდა მოძრაობდეს  თავდაპირველად margin-left  ი უნდა იყოს 0px და როდესაც margin-left მიაღწევს 1000 px ლს დააბრუნეთ დივი საწყის პოზიციაზე. დივი არ უნდა გაჩერდეს

const div = document.getElementById("div");

let pixels = 0
const move = setInterval(() =>{
    if(pixels === 1000){
        pixels = 0
    }else{
        pixels += 100
    }
    div.style.marginLeft = pixels + 'px'
}, 1000)