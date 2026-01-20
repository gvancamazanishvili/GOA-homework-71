// 3) დაწერეთ ციკლი, რომელიც მასივში ეძებს პირველ ლუწ რიცხვს. დაბეჭდეთ, შემდეგ ამოაგდეთ ეს რიცხვი სიიდან და გაწყვიტეთ პოვნის შემდეგ loop-ი.


let even_odd = [2, 4, 6, 5, 9, 0]


for(let i = 0; i < even_odd[i]; i++){
    if(even_odd[i] % 2 === 0){
        console.log(even_odd[i])
        even_odd.splice(i)
        break;
    }
}