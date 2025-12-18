// 13) ცვლადში შინახეთ ტემპერატურა. გრადუსის მიხედვით გამოიტანეთ:

// temp < 0 → "Freezing"
// 0–20 → "Cold"
// 21–30 → "Warm"
// 30 → "Hot"

const temp = 38

if (temp < 0){
    console.log("Freezing")
}else if(temp > 0 && temp < 20){
    console.log("Cold")
}else if(temp > 21 && temp < 30){
    console.log("Warm")
}else if (temp > 30){
    console.log("Hot")
}