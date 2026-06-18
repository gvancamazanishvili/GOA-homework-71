// 5) დაწერე ასინქრონული ფუნქცია (async/await), რომელიც წამოიღებს პოსტებს ლინკიდან: https://jsonplaceholder.typicode.com/posts.
// გაფილტრე მიღებული მასივი და კონსოლში დაბეჭდე მხოლოდ ის პოსტები, რომელთა userId არის 10-სა და 30-ს შორის.



const posts = async () => {
    try{
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    
        const data = await posts.json();
        
        const filterPosts = data.filter(post => post.userId >= 10 && post.userId <= 30);
        console.log(filterPosts);
    } catch(err){
        console.log(err);
    }
}