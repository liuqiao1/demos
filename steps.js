// n个阶梯
// 每次1步或者2步
// 有多少种走法？

// x+2*y=n（x>=0 && y>=0）

// 1. x = 0, y = (n-x)/2 = n/2
// 2. x = 1, y = (n-1)/2 能整除 && n>x
function steps(n) {
    let x = 0;
    let s = 0;
    while(x<=n){
        if((n-x)%2 === 0){
            s++;
            console.log('走'+x+'个1步');
        }
        x++;
    }
    return s;
}
console.log(steps(5));