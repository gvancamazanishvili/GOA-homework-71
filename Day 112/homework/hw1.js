// 1) Codecademy | While loop, do & while statements

let sum = 0; 
for (let counter = 0; counter < 5; counter++)
    { 
        sum += counter; 
        if (counter == 3){
            break; 
        }
}  

console.log(sum);
