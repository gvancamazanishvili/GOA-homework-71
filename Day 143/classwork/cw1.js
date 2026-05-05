const taskInput = document.getElementById("task");
const addBtn = document.getElementById('add');
const taskDiv = document.getElementById("Tasks");


addBtn.addEventListener('click', (e) => {
    if(taskInput.value === ""){
        alert("your must Enter before adding!")
        return;
    }

    const p  = document.createElement("p");
    p.textContent = taskInput.value;
    taskDiv.appendChild(p);
    taskInput.value = "";
})

