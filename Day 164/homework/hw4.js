// 4) შექმენი მასივი 5 სახელით. ყოველ 2 წამში კონსოლში დაბეჭდე შემდეგი სახელი. როცა ყველა სახელი დაიბეჭდება, ინტერვალი შეწყდეს


const names = ['gvanca', 'giorgi', 'venera', 'mzia', 'barbare', 'cisana'];
index = 0;

const display = setInterval(() => {
    console.log(names[index])
    index++;

    if(index === names.length){
        console.log("no more names to come!")
    }
}, 2000)