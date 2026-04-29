// 4) შექმენით ობიექტი calculator, რომელსაც ექნება ორი property: num1 და num2. დაამატეთ ამ ობიექტს მეთოდი add, რომელიც დააბრუნებს num1-ისა და num2-ის ჯამს. გამოიძახეთ ეს მეთოდი და დაბეჭდეთ შედეგი


const calculator  = {
    num1: 67,
    num2: 19,

    add() {
        return this.num1  + this.num2
    }
}


console.log(calculator.add())