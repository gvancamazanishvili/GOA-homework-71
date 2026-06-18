// 3) https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript


function isPalindrome(x) {
    if(x.toLowerCase() === x.split("").reverse().join("").toLowerCase()){
        return true
    }else{
        return false
    }
}