// function Position(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Position.prototype.tostring = function() {
//     console.log('====================================');
//     console.log(this.x, this.y);
//     console.log('====================================');
// }

// const position = new Position(2, 4);
// position.tostring();

class Position{
    /**
     * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
     * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
     * 而是直接通过类来调用，这就称为“静态方法”。
     */
    static classMethod() {
        return 'hello';
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // 在构造方法中绑定作用域
        this.tostring = this.tostring.bind(this);
    }
    // 类的所有方法都定义在构造函数的prototype上
    tostring() {
        console.log(this.x, this.y);
    }

    // 这样写会报错 Unexpected token =
    // test = () => {
    //     console.log(this.x, this.y);
    // }

    render() {
        this.test();
    }
}

// 必须使用new, 不存在变量提升
const position = new Position(2, 4);
// position.tostring();

// console.log('====================================');
// console.log(typeof Position);
// console.log(Position === Position.prototype.constructor);
// console.log(Position.prototype);
// console.log('====================================');

// console.log('====================================');
// // console.log(position.render());
// console.log('====================================');

// this 指向
const { tostring } = position;
tostring();// Cannot read property 'x' of undefined, 因为this现在指向window
// 解决方法：在构造函数中bind; 用类属性（我常在react组件中用的那种）

console.log(Position.classMethod()); // hello

// 用一个Class 去组织每个cell 和 notebook
// 用getter, setter 拦截值
// 新增cell 就有了模版
// 删除cell 只需要传ID
// 到state里边设计一个导出函数