define(["jquery"], function($){
    var goTop = function(ct, target) {
        this.ct = ct;
        this.target = $('<div class="gotop">回到顶部</div>')
        this.target.css({
            position: 'fixed',
            right: '100px',
            bottom: '50px',
            display: 'none',
            padding: '8px',
            cursor: 'pointer',
            border: '1px solid',
            borderRadius: '4px',
            background: "#ccc"
        })
        this.creatNode()
        this.bindEvent()

    }
    goTop.prototype.creatNode = function() {
        this.ct.append(this.target);
    }

    goTop.prototype.bindEvent = function() {
        var _this = this;
        var $window = $(window);

        $window.on('scroll', function() {
            var $top = $window.scrollTop()
            if ($top > 100) {
                _this.target.css('display', 'block')
            } else {
                _this.target.css('display', 'none')
            }
        })
        _this.target.on('click', function() {
            _this.ct.animate({
                scrollTop: 0
            }, 600)
        })
    }

    return goTop
})


//new goTop($('body'))
