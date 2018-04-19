class Light{
    constructor() {
      this.drivers = [];
    //   {
    //       red: [fn1. fn2, fn3],
    //       ...
    //   }
    }

    regist(key, fn){
        // 订阅新关键字
        if (!this.drivers[key]){
            this.drivers[key] = [];          
        }             
        this.drivers[key].push(fn);
    }

    remove(key, fn){
        // 不再订阅
        let fns = this.drivers[key];
        
        if(!fns)return false;// 根本就没订阅过
        if(!fn || typeof fn !== 'function') {
            // 需要取消的接受函数没传，或者类型错误
            // 书上说取消key对应的所有fn, 我觉得不合理，因为这样会影响其他订阅者
            return false;
        }
        if (fns.length === 0) {
            delete this.drivers[key];
        }
        // console.log('before', fns);
        
        fns = fns.filter(_fn => {
            return _fn !== fn;
        })

        console.log('after', fns);
        // 为什么this.drivers[key]没有被修改？ 
        // 由于复杂类型属于引用传递，我修改了fns, 那么相应地也会修改this.drivers,因为只不过是不同的指针指向同一个对象
        console.log('after', this.drivers[key]);

        this.drivers[key] = fns;
        
    }

    sendMsg(key) {
        console.log('send', this.drivers[key]);
        if(!this.drivers[key])return false;
        this.drivers[key].forEach(fn => {
            fn.apply(this, arguments);
        });
    }
}

class Driver{
    constructor(name) {
        this.name = name;
    }
    recieveMsg(msg) {
        console.log(' recieve ' + msg);
    }
}

const light = new Light();
const driver1 = new Driver('driver1');
const driver2 = new Driver('driver2');
const driver3 = new Driver('driver3');

light.regist('red', driver1.recieveMsg);
light.regist('green', driver2.recieveMsg);
light.regist('yellow', driver3.recieveMsg);

console.log(light);

light.sendMsg('red');

light.remove('red', driver1.recieveMsg);

light.sendMsg('red');

