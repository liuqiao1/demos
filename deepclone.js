const obj = {
    name: 'liuqiao',
    age: 23,
    isMarried: false,
    memo: null,
    text: undefined,
    friend:[{
        name: 'jack',
        age: 21
    },{
        name: 'lily',
        age: 12,
    }],   
}

// const str = JSON.stringify(obj);
// console.log(JSON.parse(str));
// console.log(obj.prototype.tostring);

// console.log(Object.prototype.toString.call(obj));

// console.log(obj.toString());
// const array = [1,2,3];
// console.log(array.toString());
// function a(){}
// console.log(a.toString());

function getType(data) {
    const toString = Object.prototype.toString;
    const map = {
        '[Object Boolean]': 'bollean',
        '[Object Null]': 'null',
        '[Object Undefined]': 'undefined',
        '[Object Function]': 'function',
        '[Object String]': 'string',
        '[Object Number]': 'number',
        '[Object Array]': 'array',
        '[Object Object]': 'object',
        '[Object Date]': 'date',
        '[Object Regxp]': 'regxp',
    }
    // 如果直接调用data.toString()达不到想要的效果，因为有些类型会重写tostring 方法，
    // 必须使用Object原型上的tostring
    return toString.call(data);
}

function deepClone(data) {
    const type = getType(data);
    let obj = null;
    if (type === 'array') {
      obj = [];
      data.forEach(element => {
          obj.push(deepClone(element));
      });
    } else if(type === 'object') {
      obj = {};
      for (const key in data) {
          obj[key] = deepClone(data[key]);
      }
    } else {
        return data;
    }
    return data;
}

console.log(deepClone(obj)); 

