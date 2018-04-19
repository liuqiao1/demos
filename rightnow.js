const options = {
    name: 'liuqiao',
    projects: (function(){return 'woater';})()
}

function printer(options){
    console.log(options);
}

printer(options);

a(1)
function a(x){
    console.log(x);    
    return (function(y){
        console.log(x);
        console.log(y);
    })(2)
}

