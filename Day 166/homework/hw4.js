// 4) შექმენით მინიმუმ 5 promise - ი და Promise.all - ის მეშვეობით დაამუშავეთ ყველა მათგანი ერთდროულად და გამოიტანეთ შედეგები ტერმინალში.

const Promise1 = new Promise((res, rej) => res("Success"))
const Promise2 = new Promise((res, rej) => res("Success"))
const promise3 = new Promise((res, rej) => res("Success"))
const promise4 = new Promise((res, rej) => res("Success"))
const promise5 = new Promise((res, rej) => res("Success"))

const allPromises = [Promise1, Promise2, promise3, promise4, promise5]

Promise.all(allPromises)
    .then((data) => {
        console.log('Success: ', data)
    })
    .catch((err) => {
        console.log("Something happned:", err)
    })