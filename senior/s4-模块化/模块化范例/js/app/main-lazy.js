requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "lazy"], function($, lazy){
    lazy.init($(".pic img"))
})
