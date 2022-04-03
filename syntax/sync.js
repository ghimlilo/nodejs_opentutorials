var fs = require('fs');

/*
//동기
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/

//비동기
//readFileSync는 return 값을 주지만, readFile은 return 값이 아니라서 세 번째 인자에 콜백함수를 넣는다
//파일 읽는 잡업이 끝나면 세 번째 인자로 준 함수를 노드가 실행시키면서 첫번째 인자에는 에러가 있다면 에러를 인자로 제공하고
//두 번째 파라미터에는 파일의 내용을 인자로 공급해 주도록 되어 있음
//콜백 : 작업(파일읽기)을 끝낸 다음에 이 함수를 호출해라
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log('C');

//콜백
/*
function a(){
    console.log('A');
}
*/

//이름이 없는 함수 == 익명함수
//JS에서는 함수가 값이다
var a = function(){
    console.log('A');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);

//slowfunc 실행이 끝난 다음에 다음 함수를 호출해라 = callback을 받고 callback 실행
//callback은 a라는 함수를 가르킴
//callback()실행하면 a함수가 실행됨
