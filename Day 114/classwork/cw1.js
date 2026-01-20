// 1) let languages = ["Python", "JS", "Java", "C++"];
// მოცემულია სიტყვების მასივი. იპოვე სიტყვა “Java”. როგორც კი იპოვი, დაბეჭდე და გააჩერე ლუპი.


let languages = ["Python", "JS", "Java", "C++"];

for(let i = 0;languages.length ; i++){
    if(languages[i] === "Java"){
        console.log("We found Java:")
        break;
    }
}