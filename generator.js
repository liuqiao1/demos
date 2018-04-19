// 利用 yield next 构建双向通信系统
function *test(x){
  let y = x * (yield 'hello');
  return y;
}

const it = test(6);
let res = it.next();
console.log(res);
res = it.next(7);
console.log(res);

// 利用generator 实现多个函数交替执行
function *gen1() {
  yield 'what is your name?';
  yield 'how old are you?'
}

function *gen2() {
  yield 'my name is cat';
  yield '12';
}

const it1 = gen1();
const it2 = gen2();

let res1 = it1.next();
console.log(res1);

res1 = it2.next();
console.log(res1);

res1 = it1.next();
console.log(res1);

res1 = it2.next();
console.log(res1);

res1 = it1.next();
console.log(res1);

res1 = it2.next();
console.log(res1);

