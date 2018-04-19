function Iterator(min, max){
    // this.test = 'test';
    return {
        // test: 'test',
        cur: min,
        hasNext: function(){
          return this.cur < max;
        },
        next: function(){
          return this.cur++;
        },
        reset: function(){
          throw new Error('unsupportted operation');
        },
        // getTest: function(){
        //     return this.test;
        // }
    }
}
// const myInterator = Iterator(1, 10);
// console.log(myInterator.getTest());
for(var it = Iterator(1, 10); it.hasNext();){
    var i=it.next();
    console.log(i);
}

for(var i : Iterator(1, 20)) {
    
}