define(["jquery"], function($){
    var carousel = (function(){

        function _Carousel($target){
            this.$target = $target
            this.init()
            this.bind()
        }

        _Carousel.prototype.init = function(){

            var $imgCt = this.$target.find(".img-ct"),
                  $btnPre = this.$target.find(".btn-pre")

            var $last = $imgCt.children("li").last().clone(),
                $first = $imgCt.children("li").first().clone()

            $imgCt.prepend($last)
            $imgCt.append($first)

            var $imgWidth = $imgCt.children("li").first().width(),
                $imgLen = $imgCt.children("li").length

            $imgCt.css({
                width: $imgWidth*($imgLen),
                left: -$imgWidth
            })
        }

        _Carousel.prototype.bind = function(){
            var _this = this
            var $imgCt = this.$target.find(".img-ct"),
                $btnPre = this.$target.find(".btn-pre"),
                $btnNext = this.$target.find(".btn-next"),
                $bullet = this.$target.find(".bullet"),
                $curIndex = 0,
                $imgLock = true

            var $imgWidth = this.$target.find(".img-ct li").width(),
                $imgLen = this.$target.find(".img-ct li").length

            $btnPre.on("click", function(){
                if($imgLock === false) return;
                $imgLock = false;
                pre(1);
            })

            $btnNext.on("click", function(){
                if($imgLock === false) return;
                $imgLock = false;
                next(1);
            })

            $bullet.on("click", "li", function(){
                $bulletIndex = $(this).index()
                next($bulletIndex-$curIndex)

            })

            function next(idx){
                $imgCt.animate({
                    left: "-="+idx*$imgWidth
                },function(){
                    $curIndex += idx;
                    if($curIndex >= $imgLen-2){
                        $imgCt.css({left: -$imgWidth});
                        $curIndex = 0;
                    }
                    $imgLock = true;
                    setBullet()
                })
            }

            function pre(idx){
                $imgCt.animate({
                    left: "+="+idx*$imgWidth
                },function(){
                    $curIndex -= idx;
                    if($curIndex < 0) {
                        $imgCt.css({left: -$imgWidth*($imgLen-2)});
                        $curIndex = $imgLen-2-1;
                    }
                    $imgLock = true;
                    setBullet()
                })
            }

            function setBullet(){
                $bullet.children("li").removeClass("active");
                $bullet.children("li").eq($curIndex).addClass("active")
            }
        }

        return {
            init: function($node){
                $node.each(function(){
                    new _Carousel($(this))
                })
            }
        }
    })()

    return carousel
})



//carousel.init($(".carousel"))
