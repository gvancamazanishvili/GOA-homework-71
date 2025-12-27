// 3) გამოიყენეთ წინა დავალება და || ოპერატორი, რომ განაგრძოთ პროგრამა:
// შექმენით greetMsg ცვლადი.
// თუ isAdmin ცვლადში შენახულია true მნიშვნელობა მაშინ greetMsg გაუტოლეთ 'Admin'-ს, ხოლო თუ მისი მნიშვნელობა false-ია greetMsg ცვლადში 'user' შეინახეთ.

// საბოლოოდ კონსოლში დაბეჭდეთ 'Hello, ${greetMsg}`. გამოიყენეთ String Literal.

let areYouAnAdmin = prompt("Are you an admin? (write 'yes' or 'no) :");

const isAdmin = areYouAnAdmin  === 'yes' ? true : false;

let greetMsg = isAdmin ? "Admin" : "user";
console.log(`Hello ${greetMsg}` );