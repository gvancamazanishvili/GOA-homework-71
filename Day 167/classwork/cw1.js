// 1) შექენი 4 Promise (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული



const Promise1 = new Promise((res, rej) => res("Success")) 
const Promise2 = new Promise((res, rej) => rej("Did not success"))
const promise3 = new Promise((res, rej) => res("Success"))
const promise4 = new Promise((res, rej) => rej("Did not success"))



const allPromises = [Promise1, Promise2, promise3, promise4]


Promise.any(allPromises)
    .then((res) => {
        console.log("Successfully resolved", res)
    })
    .catch((err) => {
        console.log("It did not resolve")
    })