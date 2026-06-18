// 3) შექმენი მასივი, რომელშიც შეინახავ 5 სხვადასხვა ფერს. setInterval-ის გამოყენებით ყოველ 1.5 წამში შეცვალე საიტის ფონის ფერი მასივიდან მორიგი ფერით. მას შემდეგ, რაც პროგრამა ყველა ფერს ერთხელ მაინც გადაატრიალებს (ანუ 5-ვე ფერი გამოჩნდება), ინტერვალი უნდა გაჩერდეს


const colors = ['#450920', '#fb6f92', '#7b2cbf', '#3a0ca3', '#d8f3dc'];


let index = 0;

const colorInterval = setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index++;

    index >= colors.length ? clearInterval(colorInterval): 0
}, 1500)