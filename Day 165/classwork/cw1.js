// 1) https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript


function mostFrequentItemCount(collection) {
    let maxCount = 0;
    let counts = {};

    for(let i = 0; i < collection.length; i++){
        let num = collection[i];

        counts[num] = (counts[num] || 0) + 1;
        if(counts[num] > maxCount){
            maxCount = counts[num];
        }
    }
    return maxCount
}

console.log(mostFrequentItemCount([2, 4, 5, 4, 5, 3, 4, 4, 4]))