
// call 和 apply 都是为了改变某个函数运行时的 context 即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。因为 JavaScript 的函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。二者的作用完全一样，只是接受参数的方式不太一样。

// 作者：赵望野
// 链接：https://www.zhihu.com/question/20289071/answer/14745394
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
function Cat(name){
    this.name = name;
    this.eat = function(number, food){
        console.log(this.name + 'eat food ' + number + '  ' + food);
    }
}

// 定义在原型上也可以
// Cat.prototype.eat = function(){
//         console.log('eat food');
// }

let cat = new Cat('kitty');
cat.eat(2, 'fish'); // eat food

function Person(name){
    this.name = name;
}
let person = new Person('liuqiao');
cat.eat.call(person, 1,  'cake');// 虽然person没有eat方法，但是可以用call来调
cat.eat.apply(person, [2, 'orange']); //call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。

function a() {
    this.val = 1;
}
function b() {
    console.log(this.val);
}
const func = b.bind(new a());// 1
func();



