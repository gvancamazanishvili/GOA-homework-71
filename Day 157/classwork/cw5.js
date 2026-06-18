// 5) https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript


function arithmetic(a, b, operator){
    if(operator === 'add'){
        return a + b
    }else if(operator === 'subtract'){
        return a - b
    }else if (operator === 'multiply'){
        return a * b
    }else{
        return a / b
    }
}