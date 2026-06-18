// Date ობიექტის, setInterval-ის და clearInterval-ის გამოყენებით შექმენით პროგრამა, რომელიც ყოველ 2 წამში საიტზე ვიზუალურად გამოიტანს ამჟამინდელ თარიღს (წამებში, როგორც გაკვეძთილზე გავაკეთეთ), Interval-ი უნდა გაჩერდეთ 8 წამის შემდეგ


const p = document.getElementById('p');

const interval = setInterval(() =>{
    
    const date = Date.now();
    p.textContent = date;
    
    
}, 2000)
setTimeout(() => {
    clearInterval(interval);
    p.textContent = "interval Stopped!"
}, 8000)

