// 2) მომხმარებელს prompt()-ის გამოყენებით შემოატანინეთ ინფორმაცია არის თუ არა ადმინი. თუ მომხმარებელი შემოიტანს 'yes' მაშინ isAdmin ცვლადში შეინახეთ true, თუ შემოიტანს 'no', მაშინ isAdmin ცვლადში შეინახეთ false. გამოიყენეთ Ternary operator-ი.


const isAdmin = prompt("Are you an admin? (write'yes' or 'no) : '")

isAdmin === 'yes' ? console.log('You are an admin') : console.log("You are not an admin")