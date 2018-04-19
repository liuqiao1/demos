function fab(n){
    if(n==1 || n==2)return 1;
    // if(n==2)return 2;
    return fab(n-1) + fab(n-2);
}
console.log(fab(10));

function fib(n){
    if(n==1||n==2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
fib(10);



