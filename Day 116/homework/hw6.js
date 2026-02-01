// 6) მოცემულია მასივი:

// let cities = ["Tbilisi", "Batumi", "Kutaisi", "London", "Rustavi"];
// შეამოწმეთ თუ მასივში არსებობს "London", წაშალეთ ის splice()-ით.

let cities = ["Tbilisi", "Batumi", "Kutaisi", "London", "Rustavi"];
for(let i = 0; i < cities.length; i++){
    if(cities[i] === 'London'){
        cities.splice(i, 1)
    }
}
console.log(cities)