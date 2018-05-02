/**
 * 内存泄漏
 */
// -------------1.闭包引起
function test(){
    // let a = 1;
    // 数组 字符串 对象才会引起内存泄漏，因为他们长度不固定，需要动态分配内存 放到堆中
    let a = {
        name: 'a',
    }
    return function() {
        // 闭包可以维持函数内部变量驻留内存，使其得不到释放.
        console.log(a);
    }
    // 手动释放
    a = null;
}

// test()();

// -------------2.定义变量时不些 var let const  会放到全局环境中
function test2(){
    b = 'hello';
}
// console.log(b); // ReferenceError: b is not defined
// 难道是现在优化了？？？

// -------------3.获取了一个dom ,后来又把这个dom从文档中删掉了
//dom still exist
function click(){
    const button=document.getElementById('button');
    butto.click();
    // 释放引用
    button = null;
}
// button has removed
function removeButton(){
    document.body.removeChild(document.getElementById('button'));
}

// -----------4. 定时器的回调里边用到了外部的变量 就算你控制setinterval的回调代码不再执行，这些变量也一直得不到释放
const person = {
    name: 'kk',
};
let counter = 0;
setInterval(() => {
    if(counter < 10){
        console.log(person);
        counter ++;      
    } else {
        return;
    }
}, 1000);
// 无法退出定时器， person无法释放，会一直占用这这块内存
let timmer = setInterval(() => {
    if(counter < 10){
        console.log(person);
        counter ++;      
    } else {
        // 不需要了就清掉定时器，并把回调中引用的外部变量释放掉
        clearInterval(timmer);
        person = null;
        return;
    }
}, 1000);

// ---------5. 同时取了父dom和子dom的饮用，删掉父dom的时候没有释放子dom引用
<ul id="parent">
    <li id="child">1</li>
    <li>2</li>    
</ul>
// 删除parent的时候遍历所有后代元素


// ---------6. 没有取消不用的注册事件
// react 在didMount里给dom注册了事件 那么 unmount的时候要remove

// ---------7. 没给promise写reject回调 或者没有reject这个promise ，导致这个promise一直悬而未决，在内存中一直存在



// 1、谨慎使用闭包
// a、在业务不需要用到的内部函数，可以重构在函数外，实现解除闭包.
// b、闭包内，局部变量使用后或不再需要，及时的清除掉
// 2、减少不必要的全局变量，如果用了，最好在声明周期钩子中或再函数调用之前，及时的清除掉.
// 3、减少生命周期较长的对象，及时对无用的数据进行释放销毁.
// 4、避免创建过多的对象，对不用的对象及时的释放.
// 5、对注册的事件，再不用的时候，及时的解耦.释放资源.





