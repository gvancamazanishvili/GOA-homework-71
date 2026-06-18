// 2) შექმენი ფუნქცია, რომელიც იღებს ტექსტს და ყოველ 500 მილიწამში თითო სიმბოლოს ბეჭდავს კონსოლში (typewriter effect).

const text = document.getElementById("text");

const message = "Bonjour,  Je suis Gvanca Mazanishvili ";
index = 0
reversing = false

const displayMessage = setInterval(() => {
    text.textContent = message.slice(0, index);

    if(!reversing){
        index++
        if(index > message.length){
            reversing = true;
        } 
    }
    
},400)