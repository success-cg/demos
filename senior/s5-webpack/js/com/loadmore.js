var $ = require("jquery")
var lazy = require("./lazy.js")
var water = require("./waterfull.js")

var loadMore = (function(){

    function _loadMore($btn, $news){
        this.$btn = $btn
        this.$news = $news
        this.bind()
    }

    _loadMore.prototype.bind = function(){

        var $news = this.$news
        var $btn = this.$btn
        var $len = 3
        var lock = true

        this.$btn.on("click", function(){
            if(!lock){
                return
            }
            lock = false;
            var $index = $news.children("li").length;
            console.log($index);
            $.ajax({
                url: "/loadMore",
                type: "get",
                data: {
                    len: $len,
                    index: $index
                }
            }).done(function(ret){
                //appendHtml(ret)
                console.log("done...");
                console.log(ret)
                appendHtml(ret)

                lazy.init($(".ct img"))
                $(".ct img").on("load", function(){
                    water.init($(".ct"))
                })

                lock = true
            }).fail(function(){
                console.log("服务器异常")
            })

            function appendHtml(news){
                for(var i=0; i<news.length; i++){
                    // <li class="item">
                    //     <img data-src="./img/cy (2).jpg" src="" alt="图片2">
                    // </li>
                    var imgStr = '<li><img data-src=\"'+ news[i] +'\" src="" alt=\"\"></li>'
                    var $newsList = $(imgStr)
                    $news.append($newsList)
                }
            }
        })
    }

    return {
        init: function($btn, $news){
            new _loadMore($btn, $news)
        }
    }
})()

module.exports = loadMore


//loadMore.init($(".btn"), $("#news"))
