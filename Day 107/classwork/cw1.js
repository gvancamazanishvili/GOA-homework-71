// 1) მომხმარებელს შემოაყვანინეთ რიცხვი ( 0 - 100 ) 
// ქულის მიხედვით დაადგინეთ შეფასება:

// 90--100 -> "A"
// 80--89 -> "B"
// 70--79 -> "C"
// 60--69 -> "D"
// 0--59 -> "F" 
// სხვა მნიშვნელობის შემთხვევაში -> "invalid score"
// (გამოიყენეთ switch case) 


let grade = prompt("Enter your Grade: ");

switch(grade){
    case grade > 90 && grade < 100:
        console.log('A')
    break;
    case grade > 80 && grade <= 89:
        console.log("B")
    break;
    case grade > 70 && grade <= 79:
        console.log("C")
    break;
    case grade > 60 && grade <= 69:
        console.log("D")
    break;
    case grade >= 0 && grade <= 59:
    break;
}