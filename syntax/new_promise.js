//nested Promise

function job1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve('job1 ok!');
            reject('job1 fail!');
    }, 2000);
    });
}
function job2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('job2 ok!');
    }, 2000);
    });
}
// job1().then(function(data){
//     console.log('data1', data);
//     job2().then(function(data){
//         console.log('data2', data);
//     })
// })

job1()
    .then(function(data){
        console.log('data1', data);
        return job2();
    })
    .catch(function(reason){
        console.log('reason', reason);
        return Promise.reject(reason);
    })
    .then(function(data){  
        console.log('data2', data);
    });
