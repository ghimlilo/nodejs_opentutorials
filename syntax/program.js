var args = process.argv;
console.log(args[2]); //리스트 == 배열

console.log('A');
console.log('B');
if(args[2] === '1'){
    console.log('C1');
} else {
    console.log('C2');
}   
console.log('D');
