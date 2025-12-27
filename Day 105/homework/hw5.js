// 5) შექმენით isLoggedIn ცვლადი. მომხმარებელს შემოატანინეთ ინფორმაცია არის თუ არა შესული სისტემაში. თუ პასუხი 'yes' არის - ტერნარის მეშვეობით isLoggedIn  ცვლადში შეინახეთ true, სხვა შემთხვევაში false. გამოიყენეთ string literal, რომ კონსოლში დაბეჭდოთ წინადადება:
// 'Is the user logged in? true/false.'


let isLoggedIn = prompt("Enter if you are logged in (yes / no): ")

isLoggedIn ? isLoggedIn === true : isLoggedIn === false

console.log(`Is the user logged in? true/false?`)