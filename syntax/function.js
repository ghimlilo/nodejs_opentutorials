console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second){   // parameter 매개변수 함수 안으로 전달해줌
    console.log('a');
    return first + second; // 출력 & 함수 종료
    console.log('b');
}

console.log(sum(2, 4)); // 입력값 하나하나 argument, 인자


