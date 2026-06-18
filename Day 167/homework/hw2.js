// 2) შექმენი 4 პრომისი, თითოეული ჩასვი setTimeOut-ში და  დააბრუნე მათგან რომელი გაეშვება ყველაზე სწრაფად.


const promise1 = new Promise((reolve) => {
    setTimeout(() => {
        reolve("Success: 1")
    }, 100);
})

const promise2 = new Promise((reolve) => {
    setTimeout(() => {
        reolve("Success: 2")
    }, 1000);
})


const promise3 = new Promise((reolve) => {
    setTimeout(() => {
        reolve("Success: 3")
    }, 200);
})


const promise4 = new Promise((reolve) => {
    setTimeout(() => {
        reolve("Success: 4")
    }, 4000);
})


const allPromises = [promise1, promise2, promise3, promise4];

Promise.race(allPromises)
    .then((data) => console.log("The winner is: ", data))
    .catch((data) => console.log('and lost: ' ,data))