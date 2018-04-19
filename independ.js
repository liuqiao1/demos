// for(let i=0; i<10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// }

function a(){
    var result = new Array();
    // 如果i声明为var 那么result输出都是10， 如果声明为let 就是1-10
    // let实际上为 JavaScript 新增了块级作用域。
    for(let i=0; i<10; i++){
        result[i] = function(){
            return i;
        }
    }
    return result;
}
const result = a();
for (let index = 0; index < result.length; index++) {
    const element = result[index];
    // console.log(element());
}

function Foo(){
    var n = 9;
    return function(){
      return n++;
    }
}

const F1 = Foo();// Foo里的函数被创建，生成一个作用域链
console.log(F1()); // 被调用
console.log(F1());
console.log(F1());
const F2 = Foo();// Foo里的函数被创建，生成一个作用域链
console.log(F2());// 闭包里匿名函数没有被销毁，n还在内存中
