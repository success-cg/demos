requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "tab"], function($, tab){
    tab.init($(".tab"))
})
