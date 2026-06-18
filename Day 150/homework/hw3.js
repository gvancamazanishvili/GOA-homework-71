// 3) მოცემულია მასივი colors. დესტრუქტურიზაციის გამოყენებით პირველი ორი ფერი შეინახეთ ცვლადებში first და second, ხოლო დანარჩენი ფერები მოათავსეთ ახალ მასივში სახელად others (გამოიყენეთ Rest ოპერატორი).


const colors = ["Black", "Red", "Blue", "Yellow", "Purple"];

const [first, second, ...others] = colors;

console.log(first);
console.log(second);
console.log(others);
