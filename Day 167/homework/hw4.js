// 4) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარმატებულები (resolved/fulfilled)


const Promise1 = new Promise((res, rej) => res("Success")) 
const Promise2 = new Promise((res, rej) => rej("Did not success"))
const promise3 = new Promise((res, rej) => res("Success"))
const promise4 = new Promise((res, rej) => rej("Did not success"))
const promise5 = new Promise((res, rej) => rej("Did not success"))

const allPromises = [Promise1, Promise2, promise3, promise4, promise5]


Promise.allSettled(allPromises)
    .then((res) => {
        const resolved =  res.filter(res => res.status === 'fulfilled')
        console.log(resolved)
    })

