// 1) წამოიღეთ user-ები Promise-ებით. (გაჰენდლეთ then & catch-ით)
// 

function fetchAPI(API){
    return fetch(API)
    .then(users => {
        console.log(users.json())
    })
    .catch(err => {
        console.error(`Error ${err}`)
    })
}

fetchAPI('https://jsonplaceholder.typicode.com/users');
