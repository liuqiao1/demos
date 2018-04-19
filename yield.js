function *dog(){
    let name = 'xiaohua';
    yield 1;
    name = name + 'ok';
    yield 2;
    let food = name+'get some food';
    yield 3;
    console.log(name, food);
    return 'ending';
}

let xiaohua = dog();
console.log(xiaohua.next());
console.log(xiaohua.next());
console.log(xiaohua.next());
console.log(xiaohua.next());
// dog().next();
// dog().next();
// dog().next();
// dog().next();

