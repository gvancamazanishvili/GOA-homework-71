// 1) შექმენი ორი Promise  (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად დამუშავებისთვის Allsetteld გამოიყენე.


const resPromise = new Promise((res, rej) => {
    res("The Promise has been Succsesfull")
})


const rejPromise =  new Promise((res, rej) => {
    rej("The Promise was not Successfull")
})



resPromise
    .then((data) => console.log("Succes", data))
    .catch((data) => console.error("NOT Seccessfull"))

rejPromise
    .then((data) => console.log("Succes", data))
    .catch((data) => console.error("Error", data))

const allPromises = [rejPromise, resPromise];


Promise.allSettled(allPromises)
    .then((results) => console.log('all Results: ', results))
    .catch((results) => console.log("all the errors", results))