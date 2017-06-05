
define(["lazy", "waterfull", "carousel", "gotop", "loadmore"], function(lazy, water, carousel, goTop, loadMore){
    new goTop($("body"))

    carousel.init($(".carousel"))

    loadMore.init($("#more"), $(".ct"))

    lazy.init($(".ct img"))

    $(".ct img").on("load", function(){
        water.init($(".ct"))
    })
})
