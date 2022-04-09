function timer(time){   
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(time);
        }, time); 
    });
}
// console.time('Promise.all');
// Promise.all([timer(1000),  timer(2000), timer(3000)]).then(function(result){
//     console.log('result', result);
//     console.timeEnd('Promise.all');
// });

console.time('Promise.race');
Promise.race([timer(1000),  timer(2000), timer(3000)]).then(function(result){
    console.log('result', result);
    console.timeEnd('Promise.race');
});

// all : 가장 늦게 끝나는 작업이 끝났을 때 콜백 함수가 실행됨
// race : 같은 역할을 하는 작업들 끼리 경쟁을 시켜서 제일 빨리 끝나는 작업의 결과를 받아서 그 다음 후속작업을 처리함