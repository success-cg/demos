app.get("/loadMore", function(req, res){
    var len = req.query.len
    var index = req.query.index
    var news = []
    for(var i=0; i<len; i++){
        news[i] =  "新闻" + (parseInt(index)+i+1)
    }
    res.send(news)
})
