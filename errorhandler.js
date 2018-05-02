// function divide(a, b){
//     try{
//       console.log(a/b);
//       // 试图调用一个不存在的方法
//       someNonexistentFunction();
//     }catch(error){
//       console.error('error:', error); 
//     }
//   }
//   divide(1,0);
// function divide(a, b){
//     try{
//       console.log(a/b);
//       // 试图调用一个不存在的方法
//       someNonexistentFunction();
//     }catch(error){
//       console.error('error:', error); 
//     }
//   }
//   divide(1,0);

// someNonexistentFunction();

function divid(a, b) {
    if(b === 0)throw new Error('cannot divid!');
    return a/b;
}
divid(1,0);