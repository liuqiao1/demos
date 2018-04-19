const array = [5,2,3,4,1]; // [2,4,1,0,9,3,2,1,10];

function bubble(array){
    if(!Array.isArray(array))return;
    for(let i=0; i< array.length; i++) {
        for(let j=i; j< array.length; j++) {
            if(array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        console.log(array);
        }
       
    }
    return array;
}

console.log(bubble(array));