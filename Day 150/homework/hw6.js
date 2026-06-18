// 6) დაწერე ფუნქცია calculateTotal, რომელიც მიიღებს განუსაზღვრელი რაოდენობის რიცხვებს (Rest), შეკრებს მათ და დააბრუნებს ჯამს.


const calculateTotal = (...numbers) => {
    return numbers.reduce((acc, currValue) => acc + currValue) 
}


console.log(calculateTotal(2, 4, 5, 6, 6))