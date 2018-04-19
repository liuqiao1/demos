console.log(a); // undefine
var a = 2;

a = 2;
var a;
console.log(a); // 2

// 函数优先
foo(); // 2
var foo;
function foo(){
    console.log(2);
}
foo = function() {
    console.log(1);
}