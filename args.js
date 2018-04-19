let basic = 1;
let obj = {
    name: 'a',
}
// 基本类型 为值传递 函数里函数外是独立的 相当于复制了一份
// 引用类型 为饮用传递，不同的指针指向内存中同一个对象
fun(basic, obj);
console.log(basic); // 1
console.log(obj); // b
function fun(basic, obj){
    basic = 10;
    obj.name = 'b';
}