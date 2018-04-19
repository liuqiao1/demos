/**
 * Object.create()
 * js 继承方式
 * instanceOf isPrototypeOf
 * ES6 class  继承
 */

function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.getSize = function() {
    return this.x * this.y;
}

const s1 = Object.create(Shape.prototype);
console.log(s1);

// create内部的实际操作：
function create(obj) {
    let f = function() {};
    f.prototype = obj;
    const newF = new f();
    console.log('-------create------', newF.__proto__);
    return newF;
}

console.log(create(Shape.prototype));

// 在继承上的使用
function Regtangle() {
    Shape.call(this);
}

Regtangle.prototype = Object.create(Shape.prototype);

const rect = new Regtangle();
console.log(rect.getSize()); // 0
console.log(rect instanceof Regtangle); // true
console.log(rect instanceof Shape); // true

// 这与原型链继承有什么不一样？
// Regtangle.prototype = new Shape();
function Parent(){
  this.friends = ['a','b','c','d'];
}

function Child() {

}

Child.prototype = new Parent();

let child1 = new Child();
let child2 = new Child();

console.log(child1.friends, child2.friends); // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c', 'd' ]
// child1.friends = ['a', 'b']; 
console.log(child1.friends, child2.friends); // [ 'a', 'b' ] [ 'a', 'b', 'c', 'd' ]
// 为什么 child1.friends = ['a', 'b'];  对 child2 没有影响？ 因为这种操作相当于给子类自己加了个自己的属性
// child1.friends.push('e'); 结果就不一样了，因为这样修改了父亲属性，所有实例都会共享
child1.friends.push('e');
console.log(child1.friends, child2.friends); // [ 'a', 'b' ] [ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'd', 'e' ] [ 'a', 'b', 'c', 'd', 'e' ]
// 原型上的属性当然也会被共享
Parent.prototype.food = ['cake', 'fruit'];
let child3 = new Child();
let child4 = new Child();
child3.food.push('juice');
console.log(child3.food, child4.food); // [ 'cake', 'fruit', 'juice' ] [ 'cake', 'fruit', 'juice' ]
// 这就是原型链继承的一个缺点：一个变了其余都会变
// 另一个缺点就是子类无法向父类构造函数传递参数
// 所以出现了借助构造函数的继承方式
function Animal(name){
    this.name = name;
    this.eat = function(){
        console.log('eat...');
    }
}
Animal.prototype.say = function(){
    console.log('i am '+this.name);
}

function Cat(name){
  Animal.call(this, name);
  this.color = 'red';
}
Cat.prototype = new Animal();

const cat = new Cat('kitty');
// console.log(cat.say()); // TypeError: cat.say is not a function, 无法用父亲类原型上的方法
console.log(cat.eat()); // eat... 这样每个实例都有了自己的eat方法，没有达到复用目的

// 因此出现了组合继承，结合原型链继承和构造函数继承
// Cat.prototype = new Animal();写到这里没作用啦，因为Cat已经new出来了
console.log(cat.say());

// isinstanceof 和 isPrototypeOf 有什么不一样
// 都是只要是出现在原型链中的构造函数就会判true
console.log(child1 instanceof Child); // true
console.log(child1 instanceof Parent); // true
console.log(child1 instanceof Object); // true

console.log(Parent.prototype.isPrototypeOf(child1)); // true
console.log(Child.prototype.isPrototypeOf(child1)); // true
console.log(Object.prototype.isPrototypeOf(child1)); // true

// 现在终于要回到Object.create()的主题了
// 其实Object.create()出现的原因就是为了更方便快捷地实现继承，是ES5开始有的

const SuperType = {
    superValue: true,
    getValue: function(){
        return this.superValue;
    }
}

const SubType = Object.create(SuperType); // 简单粗暴地生成一个子类实例，根本就不要写什么构造函数
console.log(SubType); // {}
console.log(SubType.superValue); // true
console.log(SubType.getValue()); // true

// ES6中的继承如何实现的？
class Component{
    constructor(componentName){
        // console.log(this); // Input {}
        this.componentName = componentName;
    }
    getName(){
        console.log('componentName:', this.componentName);
    }
}

class Input extends Component{
    constructor(name, model){
        // Component.prototype.constructor.call(this, name);
        super(name);
        // 如果不调super报错：
        // ReferenceError: 
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.model = model;
    }
    static myMethod(msg) {
        super.myMethod(msg);
    }
    getModel(){
        console.log('model:', this.model);
        // super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
        console.log(super.getName); // [Function: getName]
    }
}
// ES5 的继承，实质是先创造子类的实例对象this，
// 然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），
// 然后再用子类的构造函数修改this。

const input = new Input('input', 'inputModel');
input.getName(); // componentName: input
input.getModel(); // model: inputModel


