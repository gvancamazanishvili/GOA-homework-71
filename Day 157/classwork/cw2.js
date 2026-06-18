// 2) https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript


var number=function(array){
    let res = []
    for(let i = 0; i < array.length; i++){
        res.push(`${[i + 1]}: ${array[i]}`)
    }
    return res
}


number([1, 2, 3, 4, 5,])