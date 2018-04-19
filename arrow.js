function out () {
    // console.log(this);
    // return () => {
    //     console.log(this);
    // };
    this.name = 'out';
    return () => {
      console.log(this.name);      
    }
    // inner();
}

out()();

// var name = 'window';

// var object = {
//     name: 'object',
//     getName: this,
//     // getName: function(){
//     //     return function(){
//     //         return this.name;
//     //     }
//     // }
// }

// console.log(object.getName);

// 　　var name = "The Window";

// 　　var object = {
// 　　　　name : "My Object",

// 　　　　getNameFunc : function(){
// 　　　　　　return function(){
// 　　　　　　　　return this.name;
// 　　　　　　};
// 　　　　}

// 　　};

// console.log(object.getNameFunc()());
// name = 'ok';
// function a() {
//     console.log(this.age);
// }
// // a();// node
// function b() {
//     this.name = 'b'; 
//     this.age = 10;
//     a();
//     function c() {
        
//     }
// }
// b();