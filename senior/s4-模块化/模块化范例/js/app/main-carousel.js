requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "carousel"], function($, carousel){
    carousel.init($(".carousel"))
})
