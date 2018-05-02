function a(){
    setTimeout(() => {
      console.log('a');      
    }, 3000);
}

// function myLock(){
//     this.isLock = false;
// }
// myLock.prototype.onLock = function(){this.lock = true};
// myLock.prototype.unLock = function(){this.lock = false};

// A.prototype = new myLock();
// const a = new A();
// console.log(A);

function initlock(func){
    func.lock = false;
    return func;
}

const aLock = initlock(a);
console.log(aLock);

// class Lock{
//     constructor(handler, args=null){
//         this.lock = false;
//         this.handler = handler;
//         this.args = args;
//     }
//     onlock(){
//         this.lock = true;
//     }
//     unlock(){
//         this.lock = false;
//     }
//     run(){
//         if(this.lock)return;
//         this.onlock();
//         this.handler();
//         this.unlock();
//     }
// }

// const aLock = new Lock(a);
// // console.log(aLock);
// aLock.run();
// aLock.run();
// aLock.run();
