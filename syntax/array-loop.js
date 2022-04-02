var arr = ['a', 'b', 'c'];
console.log(arr[0]);

//값 바꾸기
arr[2] = 3;
console.log(arr);

//배열의 길이
console.log(arr.length);

//배열 끝에 값 삽입
arr.push('E');
console.log(arr);


//반복문
var number = [1, 400, 12, 35, 5, 345];
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`);