var gulp = require("gulp") //加载gulp，相当于机床

var cssnano = require("gulp-cssnano") //css压缩
var concat = require("gulp-concat") //文件合并
var uglify = require("gulp-uglify") //js压缩
var rename = require("gulp-rename") //重命名
var clean = require("gulp-clean") //清空文件夹

var minhtml = require("gulp-minhtml") //html压缩
var jshint = require("gulp-jshint")  //js代码规范性检查
var imagemin = require("gulp-imagemin") //图片压缩

var browserSync = require("browser-sync").create() //浏览器同步刷新


gulp.task("css", function(){
    gulp.src(["./css/index.css",
              "./css/carousel.css",
              "./css/waterfull.css",
              "./css/loadmore.css",
              "./css/iconfont.css"]) //保证了css的顺序
        .pipe(concat("index-merge.css")) //css合并，文件名字为 index-merge.css
        .pipe(cssnano())     //css压缩
        .pipe(gulp.dest("dist/css/"))  //输出到 dist/css 文件夹下
})

gulp.task("cssall", function(){
    gulp.src("./css/*.css")  //不保证 css 的顺序，如果 css 写的不好，可能会有样式覆盖
        .pipe(concat("index-merge.css")) //css合并，文件名字为 index-merge.css
        .pipe(cssnano())     //css压缩
        .pipe(gulp.dest("dist/css/"))  //输出到 dist/css 文件夹下
})

gulp.task("imagemin", function(){
    gulp.src("./img/*.jpg")  //选择所有的图片
        .pipe(imagemin())    //压缩图片
        .pipe(gulp.dest("dist/img/"))  //输出到 dist/img 文件夹下
})

gulp.task("reload", function(){
    browserSync.reload()
})

gulp.task("server", function(){
    browserSync.init({   //开启服务器
        server: {
            baseDir:"./"    //设定服务器的根目录
        }
    })
    gulp.watch(["**/*.css", "**/*.js", "**/*.html"], ["reload"]) //监听，文件有变化就刷新
})
