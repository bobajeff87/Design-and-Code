var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');

var src = './process',
    app = '.builds/app';

gulp.task('js', function() {
    return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
        transform: 'reactify',
        debug: true
    }))
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function () {
    gulp.src( app + '/**/*.html');
});