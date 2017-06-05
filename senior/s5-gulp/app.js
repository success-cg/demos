var $ = require("jquery")
var goTop = require("./js/com/gotop")
var carousel = require("./js/com/carousel")
var loadMore = require("./js/com/loadmore")
var lazy = require("./js/com/lazy")
var water = require("./js/com/waterfull")

new goTop($("body"))

carousel.init($(".carousel"))

loadMore.init($("#more"), $(".ct"))

lazy.init($(".ct img"))

$(".ct img").on("load", function(){
    water.init($(".ct"))
})
