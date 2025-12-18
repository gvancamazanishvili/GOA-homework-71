// 2) გამოიყენეთ Math.random() რათა დააგენერიროთ რენდომ რიცხვი 0-დან 100-მდე. თუ რიცხვი 50-ზე ნაკლები აღმოჩნდება გამოიტანეთ false, ხოლო თუ 50-ზე მეტი იქნება გამოიტანეთ true


num = Math.random() * 100

if (num < 50){
    console.log(false)
}else{
    console.log(true)
}