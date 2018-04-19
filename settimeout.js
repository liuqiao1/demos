
// let ok = true;
// let ip = null;
// let timer = null;
// console.log('before');
// while (!ip) {
//     console.log(ip);
//     if(!timer){
//     timer = setTimeout(() => {
//         console.log('dog'); 
//         ip=10;
//         timer = null;
//     },1);
// }
// }
// console.log('after');

// let ip = 1;
// let timer = setInterval(()=>{
//     // dispatch({
//     //     type:'uuu'
//     // })
//     ip = Math.ceil(Math.random()*10);
//     console.log('getIP', ip);
//     if(ip%2 === 0){
//         clearInterval(timer);
//     }
// },5000)
// et result = null;
// function a() {
//     // let result = null;

//     // return 

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // result = 1;
//             resolve(1);
//         }, 1000);
//     });

//     return promise.then((data) => {
//       console.log(data);
//       return data;
//     })
   
//     // return result;
// }

// console.log(a());

// setTimeout(() => {
//     return 1;
// }, timeout);

// function test() {
//     function a() {
//         var x = "45";
//         return x;
//     }
     
//     var y;
     
//     function set_y () {
//         y = a();
//         return y;
//         // alert(y);
//     }
     
//     setTimeout(set_y, 1000);
// }

// console.log(test());

for(var i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i);
        i*10;
    }, 100);
}



