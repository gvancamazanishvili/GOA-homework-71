// 3) შექმენით ფუნქცია getProduct რომელსაც გადაეცემა success არგუმენტი, შემდგომ ამ ფუნქციამ უნდა დააბრუნოს Promise - ი და მის შიგნით შეამოწმეთ success - ის მნიშვნელობა, თუ მისი მნიშვნელობა არის true - დაუბრუნეთ resolve ფუნქციით პროდუქტის ობიექტი (title, description, price, stock), ყველა სხვა შემთხვევაში - reject - ით დააბრუნეთ ერორის ობიექტი (status, message). (გატესტეთ ამ ფუნქციის ორივე შემთხვევა)

const getProduct = ((success) => {
    return new Promise((resolve, reject) => {
        if(success === true){
            const product = {
                title: "laptop",
                description:  "2026",
                price: "3000$", 
                stock: "200"
            }
            resolve(product);
        }else{
            const error ={
                status: 404, 
                message: "No products in Stock"
            }
            reject(error);
        }
    })
})

getProduct(true)
    .then((product) => {
        console.log("You bought the product", product)
    })
    .catch((err) => {
        console.log("Somethings Wrong", err)
    })


getProduct(false)
    .then((product) => {
        console.log("You bought the product", product)
    })
    .catch((err) => {
        console.log("Somethings Wrong", err.status, err.message)
    })