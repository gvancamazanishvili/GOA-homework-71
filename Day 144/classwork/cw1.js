// გააგრძელეთ To-do app:
// task-ებს დაამატეთ remove/delete ღილაკი, რომელზე დაჭერამაც task-ი სიიდან უნდა ამოშალოს.

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


