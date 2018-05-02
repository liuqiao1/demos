// 2s内不管你有多少触发动作 函数只执行一次
// 记住第一次触发的时间
// 之后每次触发都去比对一下是不是在2s内
// 2 - (now - start) > 0 还在2s内 不用立即执行 用定时器甩到后面 
// < 0 的话，就超过了，可以释放重新跑一遍 重置start

function throttle(handler, wait) {
    let startTime = Date.parse(new Date());
    let timmer = null;
    return function(){
        const now = Date.parse(new Date());
        console.log('-----now', now);
        console.log('-----startTime', startTime);
        
        const remain = wait - (now - startTime);
        console.log(remain);
        clearTimeout(timmer);
        if (remain > 0){
            timmer = setTimeout(() => {
                handler();
            }, remain);
        }else {
            handler();
            startTime = Date.parse(new Date());
        }
    }
}
function handler(){
    console.log('hello....');
}

setInterval(() => {
  throttle(handler, 2000)(); 
}, 1000);
