// 1) შექმენი პროგრამა, რომელიც ეკრანზე გამოაჩენს ციფრს 10. setInterval-ის გამოყენებით ყოველ 1 წამში ეს ციფრი უნდა შემცირდეს 1-ით (9, 8, 7...). როდესაც ტაიმერი ჩამოვა 0-ზე, ინტერვალი უნდა გაჩერდეს (clearInterval) და ეკრანზე დაიბეჭდოს შეტყობინება: 'Time is up!'


const timerEl = document.getElementById('timer');

let count = 10;

const timerInterval = setInterval(() => {
    count--;
    if(count > 0){
        timerEl.textContent = count;
    }else{
        timerEl.textContent  = "Time is Up!"
        clearInterval(timerInterval);
    }
}, 1000)