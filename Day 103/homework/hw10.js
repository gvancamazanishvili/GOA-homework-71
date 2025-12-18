// 10) შექმენით ცვლადი username.
// თუ:
// ცარიელია → "Username is required"
// სიგრძე ნაკლებია 4-ზე → "Username is too short"
// სხვა შემთხვევაში → "Username accepted"

const username = "gvancamazanishvili"

if  (username == ""){
    console.log("Username is required")
}else if (username < 4){
    console.log("Username is too short")
}else{
    console.log("Username accepted")
}