var gulp = require('gulp'); 
var connect = require('gulp-connect');
gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will live inside of app/
        port: 8888
    });
});