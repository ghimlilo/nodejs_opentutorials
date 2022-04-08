var members =['egoing', 'lilo', 'alex'];
console.log(members[1]);
var i =0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i +1;
}


var roles = {
    'programmer': 'egoing',
    'designer': 'k8805',
    'manager': 'hoya',
}

console.log(roles.designer);
console.log(roles['designer'])

for(var name in roles){
    console.log('object => ', name, 'value => ', roles[name]);
}

//객체 지향 프로그래밍
var f = function(){
    console.log('object');
    console.log('array');
}

console.log(f);
f();

var a = [f];
a[0](); //배열에 원소로써 함수가 존재할 수 있다

var o = {
    func:f
}
o.func(); //f

//js에서는 f라는 statement가 값이 될 수 있다
//처리 방법을 담고 있는 구문이면서 동시에 그것 자체가 값이 될 수 있다
//f 함수는 서로 연관된 데이터를 grouping 하는 객체

//배열과 객체는 모두 서로 연관된 데이터를 담는데, js에서는 처리 방법을 grouping하는 함수 역시 데이터이기도 함 
//따라서 배열과 객체에 담을 수 있다

var q = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function(){
        console.log(this.v1); //혹시 이게 self...?
    },
    f2 : function(){
        console.log(this.v2);
    }
}

q.f1();
q.f2();

//객체 서로 연관된 데이터와 그 데이터를 처리하는 방법인 함수를 grouping해서 
//코드의 복잡성을 낮추는 수납상자