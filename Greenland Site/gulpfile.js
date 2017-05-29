var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var uglifycss = require('gulp-uglifycss');

// uglify js

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('minifyjs'))
});

// css prefixer

gulp.task('styles', function() {
    gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('CSSprefixed'))
        .pipe(browsersync.reload({ stream: true }))
});

// uglify css

gulp.task('cssuglify', function () {
  gulp.src('css/styles.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('CSSuglify'));
});

// browser-sync

gulp.task('browsersync', function() {
    browsersync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('css/styles.css', ['styles']);
    gulp.watch('index.html').on('change', broswersync.reload({ stream: true }));
});

gulp.task('default', ['styles', 'scripts', 'browsersync', 'cssuglify']);