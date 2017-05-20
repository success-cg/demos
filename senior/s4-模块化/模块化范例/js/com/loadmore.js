define(["jquery"], function($){
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
                    lock = true
                }).fail(function(){
                    console.log("服务器异常")
                })

                function appendHtml(news){
                    for(var i=0; i<news.length; i++){
                        var $newsList = $("<li>"+news[i]+"</li>")
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

    return loadMore
})

//loadMore.init($(".btn"), $("#news"))
