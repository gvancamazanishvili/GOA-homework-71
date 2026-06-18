// 4) https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) { 
    if(bonus === true){
        return `£${salary * 10}`
    }else{
        return `£${salary}`
    }
}