var gulp = require('gulp');

gulp.task('watch', function() {
    console.log('Hello from Gulp!');
});

gulp.task('html',function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('bulld'));
});