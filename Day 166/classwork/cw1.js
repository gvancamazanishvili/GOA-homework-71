// 1) შექმენით თქვენი ხელოვნური Promise და გადაეცით callback ფუნქცია resolve და reject პარამეტრით, ფუნქციის შიგნით გამოიყენეთ setTimeout - ი იმისთვის რომ შეაყოვნოთ კოდი, ასევე შექმენით success ცვლადი რისი დახმარებითაც თქვენ მიიღებთ გადაწყვეტილებას რომელი სიტუაცია გაუშვათ resolve თუ reject, შემდგომ ფუნქციის გარეთ დაელოდეთ promise - ის შესრულებას .then და .catch ფუნქციის დახმარებით


const promise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() =>{
        if(success){
            resolve("prosess was done sucsessfully!")
        }else{
            reject("Prosess was stopped!")
        }
    }, 2000)
})


promise
    .then((message) => {
    console.log("sucsesfully", message)
})  .catch((err) => {
    console.log("there was an Error in the code", Error)
})