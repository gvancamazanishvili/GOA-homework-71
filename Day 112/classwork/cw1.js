// 1) დაწერეთ while loop პროგრამა: შეეკითხეთ მომხმარებელს პაროლი, იქამდე სანამ არ შემოიტანს სწორ მნიშვნელობას.


const Password = "iambetterthenyou"
let pass = prompt("Enter correct password: ")

while (Password !== pass){
    console.log("Try again");
    console.log(prompt("Enter correct password: "))
}
console.log("Accses Granted")
