// synchronous asynchronous
// ajax 브라우저와 웹서버가 페이지 리로드를 하지 않고도 JS를 이용해서 서로 통신하는 것

import fetch from "node-fetch";


console.log(1);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    });
console.log(2);

/*
fetch 함수는 Promise 데이터 타입을 return 함
Promise는 성공적으로 실행되면(resolved) Response object를 돌려줌
-> 어떤 함수를 사용하는데 그 함수의 return 값이 Promise 라면
그 함수는 비동기적으로 동작할 가능성이 큼
그 함수가 리턴한 값은 두 개의 함수를 사용할 수 있다. then() .catch()  -> 콜백함수를 받는다  
- fetched.then(function(result){}); fetch를 통해 실행한 결과가 성공했을 때 then으로 전달된 콜백함수가 호출 되도록 약속 되어 있음
    콜백 함수가 호출 되면서 결과값이 있다면 첫번재 파라미터(result)로 받을 수 있음
- fetched.catch(function(reason){}); promise를 리턴하는 함수가 실행됐을 때 실패 했다면 catch 안으로 전달된 콜백 함수가 호출됨
    reason 파라미터에 실패한 이유가 전달 됨
비동기적인 작업을 처리할 때 그 작업이 성공했는지 실패 했는지를 표준화된 방식을 이용해서 처리할 수 있도록 함
성공했을 때는 then으로 전달된 함수, 실패했을 때는 catch로 전달된 함수가 실행 될 것이다 
*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        // response.json().then(function(data){  // Nested promise
        //     console.log('data', data);
        // });
        return response.json();     // promise를 리턴함(header만 도착한 상태, body가 오지 않았음) -> then을 쓸 수 있다
    })  
    .catch(function(reason){
        console.log('reason', reason);
    })
    .then(function(data){
        console.log('data', data);  // promise chaining, or async await을 하면 chaining 안함
    })
    ;

 
// response.json()이 리턴하는 값도 Promise -> then과 catch 쓸 수 있음
