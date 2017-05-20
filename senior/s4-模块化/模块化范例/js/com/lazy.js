define(["jquery"], function(){
    var lazy = (function(){
        function Exposure($target){
            this.$target = $target
            this.bind()
            this.loadImg()
        }

        Exposure.prototype.bind = function(){
            var _this = this
            $(window).on("scroll", function() {
                _this.loadImg()
            })
        }

        Exposure.prototype.loadImg = function(){
            var _this = this
            this.$target.each(function() {
                if (_this.isVisible($(this)) && $(this).not(".show").length > 0) {
                    var url = $(this).data("src");
                    $(this).attr("src", url);
                    $(this).addClass("show");
                }
            })
        }

        Exposure.prototype.isVisible = function($node){
            var $offset = $node.offset().top;
            var $scrollTop = $(window).scrollTop();
            var $height = $node.outerHeight();
            var $windowHeight = $(window).height();
            if ($windowHeight + $scrollTop > $offset && $scrollTop < $offset + $height) {
                return true
            } else {
                return false
            }
        }

        return {
            init: function($node){
                new Exposure($node)
            }
        }
    })()

    return lazy
})


//lazy.init($(".pic img"))
