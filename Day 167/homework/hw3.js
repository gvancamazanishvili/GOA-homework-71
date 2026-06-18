// 3)შექმენი 4 ფრომისი  და reduce-ით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი.

const Promise1 = new Promise((res, rej) => res("Success"));
const Promise2 = new Promise((res, rej) => rej("Did not success"));
const promise3 = new Promise((res, rej) => res("Success"));
const promise4 = new Promise((res, rej) => rej("Did not success"));
const promise5 = new Promise((res, rej) => rej("Did not success"));

const allPromises = [Promise1, Promise2, promise3, promise4, promise5];

Promise.allSettled(allPromises)
    .then((res) => {
        const status = res.reduce((Acc, curValue) => {
            if(curValue.status === "fulfilled"){
                Acc.seuccessCount += 1;
            }else if(curValue.status === 'rejected'){
                Acc.failedCount += 1;
            }
            return Acc;
        }, {seuccessCount: 0, failedCount: 0});
        console.log(status)
    });