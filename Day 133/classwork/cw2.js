// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში


const phone = {
    brand: 'Iphone', 
    model: '16 pro', 
    price: 3500,

    addingPrice(){
        const newPrice =  this.price + 3000
        return newPrice
    }
}

console.log(phone.addingPrice())