// 3) დაწერეთ while loop, რომელიც 1-დან 50-მდე დაბეჭდავს რიცხვებს. 3-ის ჯერად რიცხვებზე დაბეჭდოს 'Fizz', 5-ის ჯერად რიცხვებზე 'Buzz'. ორივეზე ერთად 'FizzBuzz'.

// როდესაც რიცხვების count მიაღწევს 45-ს => გაწყვიტეთ პროგრამა.


let count = 0

while (count <= 50){
    if(count % 3 === 0){
        console.log('fizz')
    }
    else if (count % 5 === 0){
        console.log('Buzz')
    }
    else if (count % 3 === 0 && count % 5 === 0){
        console.log('Fizzbuzz')
    }
    count += 1
}