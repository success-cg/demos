//定义模块 myModule.js
define(function(require, exports, module){
    var $ = require("jquery.js")
    $("div").addClass("active")
})

//加载模块
seajs.use(['myModule.js'], function(my){

})
