// 1) ვისაც არ დაგისრულებიათ საკლასო დავალება შეასრულეთ და გააუმჯობესეთ დიზაინი,კოდი კარგად გაიაზრეთ და ახსენით კომენტარების სახით


// გააგრძელეთ To-do app:
// task-ებს დაამატეთ remove/delete ღილაკი, რომელზე დაჭერამაც task-ი სიიდან უნდა ამოშალოს.



/* პირველ რიგში ჩვენ მოგვაქვს html-დან თითოეული ელემენტი რომელიც გვჭირდება.

დამატების ღილაკზე ვამატებთ მოვლენის მსმენელს და ვუსმენთ დაკლიკებას რადგან ზუსტად ამის შემდეგ უნდა მოხდეს task-ის დამატება. 22-ე ხაზზე ვამოწმებთ თუ input-ის მნიშნელობა არის თუ არა წარიელი სტრინგი. თუ არის მშინ გამოვუტანთ alert-ის გამოყენებით ტექტს. შემდეგ უკვე ვქმნით პარაგარაფს სადაც ეს task-ები დაემატება და edit და delete ღილაკები. 
32-ე ხაზზე ჩვენ ვეუბნებით რომ პარაგარაფის ტექსტის მნიშვნელობა იყოს input-ის მნიშვნელობა. 34-35 ხაზზე ღილაკებს ვაძლევსთ ტექსტს. 

შემდეგ editBtn ვუმატებთ მოვლენის მსმენელს, ორივეს შემთხვევაში იგივე მოვლენა არის საჭირო. editBtn-ის შემთხვევაში ჩვენ ვქმნით ახალ ტექტს prompt-ის გამოყენებით რომელსაც გადაეცემა ორი არგუმენტი. 1. ეს არის პატარა ტექსტი prompt-ის ზემოთ ხოლორ შემდეგ ვუთითებთ იმ ლოკაციას თუ ეს ტექსტი სად უნდა დაემატონს. ჩვენ შემტხვევაში კი p.textContent
ვამატებთ შემოწმებას ტომ თუ ახალი ტექსტი არ არსებობს ანდა ცარიელი ადგილების მოშორების შემდეგ არ არის ცარიელი სტრინგი მაშინ p.textContent გახდება ახალი ტექსტი.

deleteBtn-ის შემთხვევაში გაციელბით მარტივია, ჩვენ უბრალოდ p-ში შექმნილი ყველა ელემენტი უნდა ამოვსალოთ 

შემდეგ ვქმნით ცვლადს სახელად btnGroup რომელშიც ვქმნით ახალ div-ს რომელიშიც მოქცეული იქნება ყველა ელემენტი
ამ div-ში ვამატებთ: editBtn, deleteBtn ხოლო p-ში ვამატებთ ამ დაჯგუფებულ ღილაკებს. და საბოლოოდ ვამატებთ ამ ყველაფერს taskDiv Div-ში 

*/

const taskInput = document.getElementById("task");
const addBtn = document.getElementById('add');
const taskDiv = document.getElementById("Tasks");


addBtn.addEventListener('click', (e) => {
    if(taskInput.value === ""){
        alert("your must Enter before adding!")
        return;
    }
    
    const p  = document.createElement("p");
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement("button")
    
    p.textContent = taskInput.value;
    
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete"
    
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit Text', p.textContent)
        if(newText !== null  && newText.trim() !== ""){
            p.textContent = newText;
        }
    })
    
    deleteBtn.addEventListener("click", () => {
        p.remove()
        editBtn.remove()
        deleteBtn.remove()
    })
    
    
    const btnGroup = document.createElement("div");

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    p.appendChild(btnGroup);
    taskDiv.appendChild(p);
    
    taskInput.value = "";
    
    editBtn.classList.add(("buttons"));
    deleteBtn.classList.add(("buttons"));
})


