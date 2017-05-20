//定义模块 myModule.js
define(["dependency"], function(){
    var name = "cg"
    function printName(){
        console.log(name);
    }

    return {
        printName:printName
    }
})


//加载模块
require(['myModule'], function(my){
    my.printName()
})
