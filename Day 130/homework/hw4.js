// 4) let name = "Anna";

// function showName() {
//    let name = "Luka";
//    console.log(name);
// }
// showName();
// console.log(name);
// რას გამოიტანს მოცემული კოდი ? ახსენით რატომ

let name = "Anna";

function showName() {
    let name = "Luka";
    console.log(name);
}
showName(); // დააკონსოლებს Luka
console.log(name); // დააკონსოლებს Anna

// ეს იმიტომ მოხდა რომ ფუნქციის დასაწყისი ჩვენ შექმნილი  გვქონდა გლობალური scope ხოლო ფუნქციაში იგივე ცვლადის სახელით გვქონდა ლოკალური scope-ი ამიტომ რომდესაც ფუნქცია გამოვიძახეთ, გამოგვიდანა Anna გლობალური ცვლადიდან ხოლო Luka ლოკალური ცვლადიდან 


