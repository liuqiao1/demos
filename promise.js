// function wrapper(num){
//     const promise = new Promise((resolve, reject) => {
//         console.log('触发，去取数');
        
//         resolve(num);
//     });
//     return promise.then(data => {
//         console.log('resolve', data);
//         return data;
//     });
// }

// const result = wrapper(10);
// console.log('result:', result);

// function fn1(resolve, reject) {
//     setTimeout(() => {
//         console.log('步骤一：执行');
//         resolve('1');
//     }, 500);
// }

// function fn2(resolve, reject) {
//     setTimeout(() => {
//         console.log('步骤二：执行');
//         resolve('2');
//     }, 100);
// }

// new Promise(fn1).then(function(val) {
//     console.log('fn1 resolve', val);
//     return new Promise(fn2);
// }, function(error) {
//     console.log(error);
// }).then(function(val) {
//     console.log(val);
//     return 33;
// }, function(){}).then(function(val) {
//     console.log(val);
// }, function(){});
// const p2 = new Promise(fn1).then(function(val) {
//     console.log('fn1 resolve', val);
//     return new Promise(fn2);
// }, function(error) {
//     console.log('error', error);
// });
// console.log(p2); // promise {<pending>}

// const p3 = p2.then(function(val) {
//     console.log('fn2 resolve', val);
//     return 33;
// }, function(error) {
//     console.log('error', error);    
// });

// p3.then(function(val) {
//     console.log('fn3 resolve', val);
//     return 33;
// }, function(error) {
//     console.log('error', error);    
// });

// console.log(p3); // promise {<pending>}

function Defer(fn) {
    var callback;
    this.then = function(done){
        callback = done;
    }
    function resolve() {
        callback();
    }
    fn(resolve);
}

function n1(resolve){
    resolve();
}
let d1 = new Defer(n1);
d1.then(function() {
    
})
console.log(d1);
// d1.then();


