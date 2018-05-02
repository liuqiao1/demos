const treeData = {
    name: "root",
    type: "fold",
    children: [{
        name: 'b',
        type: 'fold',
        children: [{
            name: 'f',
            type: 'file',
        }, {
            name: 'F',
            type: 'fold',
        }]
    }, {
        name: 'c', 
        type: 'file',
    }, {
        name: 'a',
        type: 'file',
    }, {
        name: 'B',
        type: 'fold'
    }, {
        name: 'A',
        type: 'fold',
    }, {
        name: 'd',
        type: 'file',
    }, {
        name: 'e',
        type: 'file',
    }, {
        name: 'E',
        type: 'fold',
    }, {
        name: '510',
        type: 'fold',
        children: [{
            name: '3',
            type: 'file',}
        ]
    }, {
        name: '234',
        type: 'fold',
    }],
}

function traverse(node){
    console.log('-----node', node.name);
    if (node.children && node.children.length) {
        node.children = processFoldFile(node.children);
        node.children.forEach(element => {
            traverse(element);
        });
    } else return;
}

// traverse(treeData);
// console.log('----result', treeData);

function processFoldFile(children) {
  if (children.length <= 1)return children;
  let foldList = [], fileList = [];
  for( let i=0; i<children.length; i++) {
    const node = children[i];
    if(node.type === 'fold'){
       foldList.push(node);
    }else if(node.type === 'file'){
       fileList.push(node);
    }
  }
//   console.log('-----before', foldList);
//   quickSort(foldList)
//   console.log('-----after', foldList);
//   quickSort(foldList);
//   quickSort(fileList);
    bubbleSort(foldList);
    bubbleSort(fileList);
    // foldList = proceeBS(foldList);
    // console.log('-----kkkk', foldList);
    foldList = proceeBS(foldList);
    fileList = proceeBS(fileList); 
    // console.log('----fold', foldList);
    // console.log('----file', fileList);    
    return foldList.concat(fileList);
}

function proceeBS(list){
    // console.log('-----list', list);
    const pivot = getPivot(list);
    if (pivot === null) return list;
    // console.log('-----pivot', pivot);
    let mergeList = [];
    let bigList =list.slice(0, pivot);
    let smallList = list.slice(pivot, list.length);
    // console.log('-----big', bigList);
    // console.log('-----small', smallList);  
    let i=0, j=0;
    while(i<bigList.length && j<smallList.length) {
        const bigCharCode = bigList[i].name.charCodeAt(0);
        const smallCharCode = smallList[j].name.charCodeAt(0);
        if (smallCharCode - bigCharCode === 32) {
          mergeList.push(bigList[i]);
          mergeList.push(smallList[j]);
          i++;
          j++;          
        } else if (smallCharCode - bigCharCode > 32){
          mergeList.push(bigList[i]);
          i++;
        } else { // <32的情况
          mergeList.push(smallList[j]);          
          j++;
        }
    }
    // console.log('----mergelist before', mergeList, i, j);
    
    // 看谁还没走完
    // console.log('----i,j', i, j);
    if (i < bigList.length){
        mergeList = mergeList.concat(bigList.slice(i, bigList.length));
    }
    if (j < smallList.length){
        mergeList = mergeList.concat(smallList.slice(j, smallList.length));
    }
    // console.log('----mergelist after', mergeList);
    return mergeList;
}

function getPivot(list){
    for (let i=0; i<list.length-1; i++){
        const charCode = list[i].name.charCodeAt(0);
        if (charCode < 97 && charCode >= 65){
            const nextCharCode = list[i+1].name.charCodeAt(0);
            if (nextCharCode >=97 && nextCharCode <= 122) {
                return i+1;
            }
        }
    }
    return null;
}

function mapListToObj(list){
    let obj = {};
    list.map((item, index) => obj[index] = item);
    return obj;
}

function mapListToNum(list){
    return list.map(item => item.name.charCodeAt(0));
}

function wrapNode(obj, indexA, indexB) {
    const temp = obj[indexA];
    obj[indexA] = obj[indexB];
    obj[indexB] = temp;
}

function bubbleSort(list){
    for(let i=0; i<list.length; i++) {
       for(let j=0; j<list.length-1-i; j++) {
           if (list[j].name.charCodeAt(0) > list[j+1].name.charCodeAt(0)){
               let temp = list[j];
               list[j] = list[j+1];
               list[j+1] = temp;
           }
       }
       // console.log(i, list);
    }
    return list;
}

function quickSort(a){
    if(a.length==0)return a;
    const pivotIndex = Math.floor(a.length/2);
    // console.log('---pivo', pivotIndex);
    const pivot = a[pivotIndex].name.charCodeAt(0);
    let left = [];
    let right = [];
    for(let i=0; i<a.length; i++) {
        if(a[i].name.charCodeAt(0) > pivot){
            right.push(a[i]);
        }
        if(a[i].name.charCodeAt(0) < pivot){
            left.push(a[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}

function getWordIndex(name) {
    if(!name)return null;
    return name.charCodeAt(0);
}
const result = processFoldFile(treeData.children);
// console.log(result);

function compare(strA, strB) {
    let i=0;
    let j=0;
    while(i<strA.length && j<strB.length) {
        const aCharCode = strA.charCodeAt(i);
        const bCharCode = strB.charCodeAt(j); 
        if (aCharCode > bCharCode)return true;
        if (aCharCode === bCharCode){
            i += 1;
            j += 1;
        }
        if (aCharCode < bCharCode)return false;
    }
    if(i<strA.length)return true;
    return false;
}

const c = compare('abx', 'abs');
console.log(c);