// 2) შექმენით პროექტი Music App, უნდა შეგეძლოთ ახალი მუსიკის დამატება title, artist - ით, (ამოიღეთ მოცემული მნიშვნელობები input - ებიდან), მუსიკის წაშლა, მუსიკის განახლებაც, კოდი უნდა იყოს ორგანიზებული

const Title = document.getElementById("title");
const Artist = document.getElementById("artist");
const addBtn = document.getElementById("Add")

const musicLibrery = document.getElementById("librery");


addBtn.addEventListener('click', () => {
    if(Title.value === "" || Artist.value === ""){
        alert("You must fill out both")
        return;
    }

        const GroupDiv = document.createElement("div");
        GroupDiv.classList.add('groupDiv');
        const p1 = document.createElement("p");
        p1.classList.add('parahgraphs');
        const p2 = document.createElement('p');
        p2.classList.add('parahgraphs');


        p1.textContent = `Title: ${Title.value}`;
        p2.textContent = `Artist: ${Artist.value}`;

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement("button");
        editBtn.classList.add("buttons");
        deleteBtn.classList.add("buttons")
        editBtn.textContent = "Edit"
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", () => {
            GroupDiv.remove();
        })
        

        editBtn.addEventListener('click', () => {
            const newTitle = prompt("Edit Title", p1.textContent.replace("Title: ', '' "))
            const newArtist = prompt("Edit Artist", p2.textContent.replace("Artist: ' ''"))

            if(newTitle !== null && newTitle.trim() !== ""){
                p1.textContent = `Title: ${Title.value}`
            }
            if(newArtist !== null && newArtist.trim() != ""){
                p2.textContent  = `Artist: ${Artist.value}`
            }
        })
        
        
        GroupDiv.appendChild(p1);
        GroupDiv.appendChild(p2);
        GroupDiv.appendChild(deleteBtn);
        GroupDiv.appendChild(editBtn);
        
        musicLibrery.appendChild(GroupDiv);

        Title.value = "";
        Artist.value = "";
})