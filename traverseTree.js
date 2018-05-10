const treeData = {
    key: 1,
    left: {
        key: 2,
        left: {
            key: 4,
        },
        right: {
            key: 5,
        }
    },
    right: {
        key: 3,
        left: {
            key: 6,
        },
        right: {
            key: 7,
        }
    }
};

// class Stack{
//     constructor(){
//         this.array = [];
//     }
//     push(node){
//         this.array.push(node);
//     }
//     pop(){
//         return this.array.splice(this.array.length-1, 1)[0].key;
//     }
//     getTop(){
//         return this.array[this.array.length - 1];
//     }  
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.array);
// console.log(stack.pop());
// console.log(stack.getTop());
function traverseTree(node){
    let stack = [];
    if (!node)return;
    // const stack = new Stack();   
    stack.push(node);
    while(stack.length){
        // console.log(
        // console.log(stack.splice(stack.length-1, 1)[0].key);   
        node = stack.pop();    
        console.log(node.key);
        if(node.right){
            stack.push(node.right);
            // node = node.right;
        }
        if(node.left){
            stack.push(node.left);
            // node = node.left;
        }
        // node = stack[stack.length-1];
    }
}

traverseTree(treeData);
// 1入 出
// 3入 2入 
// 2出
// 5入 4入 
// 4出
// 5出
// 3出
// 7入
// 6入
// 6出
// 7出
