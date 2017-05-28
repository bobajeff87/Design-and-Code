var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var minify = require('gulp-clean-css');

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

// minify css

gulp.task('minifycss', function() {
    gulp.src('css/styles.css')
        .pipe(minify())
        .pipe(gulp.dest('CSSminify'))

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

gulp.task('default', ['styles', 'scripts', 'browsersync', 'minifycss']);