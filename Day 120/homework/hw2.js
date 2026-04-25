// 2) შექმენით ფუნქცია, რომელიც მიიღებს მომხმარებლის ასაკს.
// თუ ასაკი არის 18 ან მეტი, დაბეჭდოს ტექსტი: "You're an adult"
// სხვა შემთხვევაში დაბეჭდოს ტექსტი: "You are not an adult"


const checkage = (age) => {
    if(age => 18){
        return "You are an adult"
    } else{
        return "You are not a child"
    }
}