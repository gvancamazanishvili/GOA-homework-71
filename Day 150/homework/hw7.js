// დესტრუქტურიზაციის გამყენებით ერთ ხაზში ამოიღეთ ცვლადში პირდაპირ city.


const company = {
    title: "Smart Tech",
    location: {
        city: "Tbilisi",
        street: "Tsereteli Street"
    }
};

console.log({...company}.location.city)