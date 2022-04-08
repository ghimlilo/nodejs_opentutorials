var M = {
    v: 'V',
    f: function(){
        console.log(this.v);
    }
}

M.f();


module.exports = M;
//M이 가르기는 객체를 이 모듈 바깥에서 사용할 수 있도록 exports하겠다
