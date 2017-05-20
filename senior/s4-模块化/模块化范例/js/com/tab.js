define(["jquery"], function($){
    var tab = (function(){
        function _Tab($target){
            this.$target = $target
            this.init()
            this.bind()
        }

        _Tab.prototype.init = function(){
            this.header = this.$target.find("ul").eq(0)
            this.content = this.$target.find("ul").eq(1)
        }

        _Tab.prototype.bind = function(){
            var _this = this
            _this.header.on("click", "li", function(){
                var index = $(this).index()

                _this.header.find("li").removeClass("active")
                $(this).addClass("active")

                _this.content.find("li").removeClass("see")
                _this.content.find("li").eq(index).addClass("see")
            })
        }

        return {
            init: function($node){
                $node.each(function(){
                    new _Tab($(this))
                })
            }
        }
    })()

    return tab
})


//tab.init($(".tab"))
