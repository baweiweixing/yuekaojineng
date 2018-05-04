var gulp = require("gulp");
var server = require("gulp-webserver");
// var datajson = require("src/data/data.json");

gulp.task("default", function() {
    gulp.src("src")
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                // if (req.url === "/index") {
                //     res.end(JSON.stringify(datajson))
                // }
                next();
            }
        }))
})