// 4) findIndex - მეთოდის გამოყენებით console - ში დააბრუნეთ ისეთი რიცხვის index - რომელიც მეტია 3 - ზე



const jumbledNums = [123, 25, 78, 5, 9, 5, 6, 7, 8, 4, 5, 6, 7, 8, 8]; 
const lessThanthree = jumbledNums.findIndex(num => {
    return num > 3;
});

console.log(lessThanthree)