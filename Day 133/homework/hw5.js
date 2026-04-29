// 5) შექმენით ობიექტი person, რომელსაც ექნება property firstName, lastName და მეთოდი sayHello. მეთოდმა უნდა გამოიტანოს "გამარჯობა, მე ვარ [სახელი] [გვარი]".


const person ={
    firstName: "gvanca",
    lastName: 'mazanishvili', 
    
    sayHello(){
        return `greetings, i am ${this.firstName} ${this.lastName}`
    }
}

console.log(person.sayHello())


