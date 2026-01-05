// ) შექმენით ორი რიცხვეის სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიმავე წევრებს.
// თუ რიცხვები ერთმანეთს ემთხვევა - mutualNums სიაში დაამატეთ საერთო ელემენტები.


const nums1 = [98, 28, 17, 10]
const nums2 = [98, 17, 15, 9]

let mutualNums = []

for(let i = 0; i < nums1.length; i++){
    for(let x = 0; x < nums2.length; x++){
        if(nums1[i] === nums2[x]){
            mutualNums.push(nums1[i])
        }
    }
}
console.log(mutualNums)