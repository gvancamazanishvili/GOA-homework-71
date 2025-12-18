// 1) ცვლადში შეინახეთ თქვენი ასაკი, შემდეგ კი დაწერეთ Conditional statement-ები:
// თუ ასაკი ნაკლებია 10-ზე დაბეჭდეთ 'child', თუ ასაკი მეტია 10-ზე მაგრამ ნაკლებია 18-ზე კონსოლში გამოიტანეთ 'Teen', ყველა სხვა შემთხვევაში Adult.

let age = 15

if(age < 10){
    console.log("child");

}
else if (age > 10 && age < 18){
    console.log("Teen")
}

else{
    console.log('Adult')
}