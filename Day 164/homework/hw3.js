// 3) შექმენი ტაიმერი, რომელიც იწყებს 10-დან და ყოველ წამში აკლებს 1-ს. როდესაც 0 გახდება, დაბეჭდე "Time's up!".



const count = document.getElementById("number");

const timer = setInterval(() => {
    
    if(count.textContent < 1){
        count.textContent = "Time's Up!"
        clearInterval(timer)
    }else{
        count.textContent--;
    }
}, 1000)    