// 4) html დოკუმენტში დაამატეთ სამი heading: h1, h2, h3. სამივე წამოიღეთ js-ში getElementsByClassName-ის მეშვეობით და მოიძიეთ ინფორმაცია თუ როგორაა შესაძლებელი ამ ელემენტებისთვის ფერის შეცვლა js-დან. გამოიტანეთ სამივე ობიექტის მონაცემები და იპოვეთ parentNode-ი.

const h1 = document.getElementsByClassName('h1')[0];
h1.style.color = 'red';
const h2 = document.getElementsByClassName('h2')[0];
h2.style.color = 'blue';
const h3 = document.getElementsByClassName('h3')[0];
h3.style.color = 'green';




console.log(h1.parentNode);
console.log(h2.parentNode);
console.log(h3.parentNode);
