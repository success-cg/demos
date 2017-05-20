// 模块定义model.js
var name = "cg"

function printName(){
    console.log(name);
}

function sayHello(){
    console.log("hello " + name);
}

module.exports = {
    printName: printName
    sayHello: sayHello
}

//加载模块
var nameModule = require("./model.js")
nameModule.printName() //"cg"
nameModule.sayHello() //"hello cg"
