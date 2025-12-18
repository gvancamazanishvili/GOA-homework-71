/*7) შექმენით ორი ცვლადი password და confirmPassword. შეამოწმეთ
• ემთხვევა თუ არა ისინი ერთმანეთს
• არის თუ არა პაროლი მინიმუმ 8 სიმბოლოსგან შემდგარი
შედეგი დაბეჭდეთ კონსოლში.*/

const password = 12345678
const confirmPassword = 1234578

if (password === confirmPassword){
    console.log("Access granted")
}else if (password && confirmPassword === 8){
    console.log("Access granted")
}else{
    console.log("Access denied")
}

