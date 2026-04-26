// 5) შექმენით მასივი სადაც შეინახავთ სახელებს, თქვენი დავალებაა, რომ map მეთოდის გამოყენებით გამოიტანოთ თითოეული სიტყვის პირველი ასო და გადააქციოთ ის დიდ ასოდ, callback ფუნქციის მიერ დაბრუნებული მნიშვნელობა შეინახეთ ახალ მასივში, map ფუნქციის მიერ დაბრუნებული ახალი მასივი კი გამოიტანეთ console - ში


const names = ['gvanca', 'giorgi', 'mzia', 'venera'];

const upperCase = names.map(name => {
    return name[0].toUpperCase();
});

console.log(upperCase);
