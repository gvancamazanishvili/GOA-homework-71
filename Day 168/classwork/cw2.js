// 2) წამოიღეთ post-ები Async/Await. (გაჰენდვლის გარეშე)
// 

async function posts (API){
    const res = await fetch(API);
    const data = await res.json();

    console.log(data);
}


posts('https://jsonplaceholder.typicode.com/posts');