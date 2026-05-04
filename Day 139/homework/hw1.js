// შექმენით ფორმა ზუსტად ასეთი დიზაინით. დაუმატეთ ფუნქციონალი:
// შეამოწმეთ Name input-ი აღემატება თუ არა 5 სიმბოლოს. ასევე შეამოწმეთ Email-ის ველში მომხმარებელი შემოიტანს თუ არა @ სიბლოსა და წერტილს. ასევე დაამატეთ ვალიდაცია, რომ Password და Confirm Password ემთხვეოდეს ერთმანეთს. დაამატეთ alert() შესაბამისი მესიჯით თითოული დარღვევისთვის.


const form = document.getElementById('form');


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('Email').value;
    const pass = document.getElementById('pass').value;
    const repeatPass = document.getElementById("repeatPass").value;


    if(fullName.length < 5){
        alert("Fullname must be bigger then 5")
        return;
    }
    if(!email.includes("@")){
        alert("you must use '@' for email ")
        return;
    }

    if(pass != repeatPass){
        alert("passwords must match!!")
        return;
    }

    alert("Form submitted successfully! ✅")
} )