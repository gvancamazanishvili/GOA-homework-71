// 1) შექმენი ფუნქცია, რომელიც ყოველ 1 წამში დაბეჭდავს შემთხვევით რიცხვს 1-დან 50-მდე. თუ რიცხვი 25 გამოვა, გააჩერე ინტერვალი და დაბეჭდე "Target found!".


const numInterval = setInterval(() => {
    let num = Math.floor(Math.random() * 51)
    if(num === 25){
        clearInterval(numInterval)
        console.log('Target Found!')
    }
    console.log(num)
}, 1000)