define(["jquery"], function($){

    var water = (function(){

        function Waterfull($ct){
            this.$ct = $ct
            this.init()
            this.water()
        }

        Waterfull.prototype.init = function(){
                var $ct = this.$ct
                var $item = this.$ct.find("li")
                var itemArr = []
                var itemLen = parseInt($ct.width()/$item.outerWidth())

                for(var i=0; i<itemLen; i++){
                    itemArr[i] = 0;
                }

                $item.each(function(){
                    var minValue = Math.min.apply(null, itemArr)
                    var minIndex = itemArr.indexOf(minValue)
                    var maxValue = Math.max.apply(null, itemArr)

                    $(this).css({
                        top: itemArr[minIndex],
                        left: $(this).outerWidth(true) * minIndex
                    })

                    itemArr[minIndex] += $(this).outerHeight(true)

                    //父容器高度塌陷，需要设置父容器的高度
                    $ct.css({
                        height: maxValue
                    })
                })
            }

        Waterfull.prototype.water = function(){
            var _this = this
            $(window).on("resize", function(){
                _this.init()
            })
        }

        return {
            init: function($node){
                $node.each(function(){
                    new Waterfull($(this))
                })

            }
        }

    })()

    return water
})
