var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

// uglify js

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('minifyjs'))
});

gulp.task('prefixer', function() {
    console.log('fucking work damn it!!')
});

gulp.task('default', ['scripts', 'prefixer']);