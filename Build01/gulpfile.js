var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var uglifycss = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var reload = browsersync.reload;

// uglify js

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('minifyjs'))
});

// css prefixer

gulp.task('styles', function() {
    gulp.src('src/css/styles.css')
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(gulp.dest('CSSprefixed'))
        .pipe(browsersync.reload({ stream: true }))
});

// uglify css

gulp.task('cssuglify', function() {
    return gulp.src('src/css/styles.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('CSSuglify'))
});

// browser-sync

gulp.task('browsersync', function() {
    browsersync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('src/css/styles.css', ['styles']);
    gulp.watch("*.html").on("change", reload);
});

gulp.task('default', ['styles', 'cssuglify', 'scripts', 'browsersync']);