// function Parent(name) {
//     this.name = name;
//     this.sayName =  function() {
//         console.log('i am ' + this.name);
//     }
// }

// function Child(name) {
//     this.name = name
// }

// Child.prototype = new Parent('parent');
// let child=new Child('xiaoming');
// child.sayName();

// // parent 实例 parent自己的原型对象 object的原型对象
// console.log(child.__proto__.__proto__.__proto__);

class Parent{
    constructor(name) {
        this.name = name;
    }
    sayName(){
        console.log('i am ' + this.name); 
    }
}
class Child extends Parent{
    constructor(name) {
    /**
     * 
     * ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
     * ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
     */
        super(name);
        this.name = name;
    }
}

let child = new Child('miaomiao');
// Must call super constructor in derived class 
// before accessing 'this' or returning from derived constructor
// child.sayName();
// console.log(Object.getPrototypeOf(Child) === Parent);
console.log(Parent.__proto__);
