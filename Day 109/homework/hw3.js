// 3) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.


const nums = [12, -19, 193, 187, -156789, 1973]

let count = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        count += nums[i]
        console.log(count)
    }
}