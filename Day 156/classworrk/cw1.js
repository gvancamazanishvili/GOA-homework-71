// თქვენს სარეგისტრაციო ფორმაში დაწერეთ ისეთი ლოგიკა, რომ როდესაც თქვენი პროგრამა input-ებში შემოყვანილ მონაცემებს localStorage-ში იპოვის (ყველა მონაცემი უნდა ემთხვეოდეს) მაშინ საიტზე წითელი პარაგრაფის სახით გამოუტანეთ მომხმარებელს, რომ მსგავსი მომხმარებელი უკვე დარეგისტრირებულია.

const Form = document.querySelector('form');


Form.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = Date.now();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const submitBtn = document.getElementById('submit').value;

    const userData = {
        name, 
        email,
        pass, 
        submitBtn
    }
    localStorage.setItem(id, JSON.stringify(userData));

    if(userData.pass === userData.pass || userData.email === userData.email){
        alert('password or email is already used!')
    }
    Form.reset();
})
