// 1) დაწერე ფუნქცია, რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა


const countDown = (sec) =>{
    while(sec >= 0){
        console.log(sec)
        sec--;
    }
}
countDown(5)