requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "loadmore"], function($, loadMore){
    loadMore.init($(".btn"), $("#news"))
})
