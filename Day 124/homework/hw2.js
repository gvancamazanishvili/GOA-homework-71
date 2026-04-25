// 2) შექმენით Arrow ფუნქცია, რომელიც მიიღებს მომხმარებლის ასაკს.
// თუ ასაკი არის 18 ან მეტი, დაბეჭდოს ტექსტი: "You're an adult"
// სხვა შემთხვევაში დაბეჭდოს ტექსტი: "You are not an adult".



// Traditional way
const checkAge  = (age) => {
    if(age >= 18){
        return 'You are an Adult'
    }else{
        return "You are not an adult"
    }
}

// Ternary Operator

const checkAge  = (age) => {
    return age >= 18 ? 'You are an Adult' : "You are not an Adult"
}