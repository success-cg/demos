app.get("/loadMore", function(req, res){
    var len = req.query.len
    var index = req.query.index
    var imgUrl = [
        "./img/cy (0).jpg",
        "./img/cy (1).jpg",
        "./img/cy (2).jpg",
        "./img/cy (3).jpg",
        "./img/cy (4).jpg",
        "./img/cy (5).jpg",
        "./img/cy (6).jpg",
        "./img/cy (7).jpg",
        "./img/cy (8).jpg",
        "./img/cy (9).jpg",
        "./img/cy (10).jpg",
        "./img/cy (11).jpg",
        "./img/cy (12).jpg",
        "./img/cy (13).jpg",
        "./img/cy (14).jpg",
        "./img/cy (15).jpg",
        "./img/cy (16).jpg",
        "./img/cy (17).jpg",
        "./img/cy (18).jpg",
        "./img/cy (19).jpg",
        "./img/cy (20).jpg",
        "./img/cy (21).jpg",
        "./img/cy (22).jpg",
        "./img/cy (23).jpg",
        "./img/cy (24).jpg",
        "./img/cy (25).jpg",
        "./img/cy (26).jpg",
        "./img/cy (27).jpg",
        "./img/cy (28).jpg",
        "./img/cy (29).jpg",
        "./img/cy (30).jpg",
        "./img/cy (31).jpg",
        "./img/cy (32).jpg",
        "./img/cy (33).jpg",
        "./img/cy (34).jpg",
        "./img/cy (35).jpg",
        "./img/cy (36).jpg",
        "./img/cy (37).jpg",
        "./img/cy (38).jpg"
    ]


//    res.send(index)
    var img = imgUrl.slice(parseInt(index), parseInt(index)+parseInt(len))
    res.send(img)
})
