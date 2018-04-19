function quickSort(array, left, right) {
    console.time('1.快速排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = array[right], i = left - 1, temp;
            for (var j = left; j <= right; j++) {
                if (array[j] <= x) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            quickSort(array, left, i - 1);
            quickSort(array, i + 1, right);
        }
        console.timeEnd('1.快速排序耗时');
        return array;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

function quick(a, left, right){
    console.log(a, left, right);
    if(left>=right)return a;
    let x = a[left]; // 基准
    let i=left, j=right;
    while(i<j) {
        if(a[j]<x){
            break;
        } else{
            j--;
        }
    }
    while(i<j) {
        if(a[i]>x){
          break;
        } else {
            i++;
        }
    }
    let tmp = x;
    x = a[i];
    a[i] = x;  
    console.log(i, j, a[i], x);
    quick(a, left, i-1);
    quick(a, i+1, right);  
}

function qq(a){
    if(a.length==0)return a;
    const pivotIndex = Math.floor(a.length/2);
    const pivot = a[pivotIndex];
    let left = [];
    let right = [];
    for(let i=0; i<a.length; i++) {
        if(a[i]>pivot){
            right.push(a[i]);
        }
        if(a[i]<pivot){
            left.push(a[i]);
        }
    }
    return qq(left).concat([pivot],qq(right));
}

console.log(qq([1,5,3,2,4]));
