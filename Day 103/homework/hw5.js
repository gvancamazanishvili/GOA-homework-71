// 5) შექმენით ორი Boolean ცვლადი:
// isStudent და hasAccess. ლოგიკური ოპერატორების გამოყენებით დაადგინეთ შეუძლია თუ არა მოსწავლეს სისტემაში შესვლა. (განიხილეთ ყველა შესაძლო შემთხვევა)

const isStudent = true
const hasAccess = true

if (isStudent === true){
    console.log("You are indeed a student")
}else if(isStudent && hasAccess){
    consolelog("You are an student and you have accesess ")
}else if(isStudent && hasAccess === false){
    console.log("You are not a student and you don't have access")
}else if(isStudent || hasAccess === false){
    console.log("you need to be student and have access")
}
else{
    console.log('You are not a student')
}