// 7) შექმენით mode ცვლადი. მასში შეინახეთ 'Dark' ან 'Light'. გამოიყენეთ ternary + && + || რომ შეამოწმოთ:
// თუ mode-ის მნიშვნელობა 'dark' არის დაბეჭდეთ "Dark Mode On"
// თუ mode-ის მნიშვნელობა 'light' არის დაბეჭდეთ "Light Mode On"
// სხვა შემთხვევაში (|| იოპერატორის გამოყენებით) 'Unknown mode'


let mode = "blablabla"

const isDarkOrWhite = mode === 'Dark' ? console.log("Dark mode on") : mode === "Light" ? console.log("Light mode on") : console.log("unknown mode")