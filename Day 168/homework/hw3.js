// 3) სცადე მონაცემების წამოღება არასწორი ლინკიდან (მაგ: https://jsonplaceholder.typicode.com/wrong-endpoint).
// გამოიყენე .catch() მეთოდი, რათა შეცდომა არ გაეპაროს პროგრამას და კონსოლში გამოიტანო ტექსტი: "დაფიქსირდა შეცდომა მონაცემების წამოღებისა


const api = fetch(" https://jsonplaceholder.typicode.com/wrong-endpoint");

api
    .catch((err) => {
        console.error("დაფიქსირდა შეცდომა მონაცემების წამოღებისა");
    })