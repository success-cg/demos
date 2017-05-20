requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "lazy", "waterfull"], function($, lazy, water){
    lazy.init($(".ct img"))

    $(".ct img").on("load", function(){
        water.init($(".ct"))
    })
})
