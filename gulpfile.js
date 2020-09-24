var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./dev/scss/main.scss')

        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dev/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('dev/scss/**/*.scss', ['sass']);
});

var fileinclude = require('gulp-file-include');


gulp.task('fileinclude', function() {
    gulp.src(['dev/*.html'])
        .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
        .pipe(gulp.dest('dist'));
});



var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('scripts', function () {
    return gulp.src([
        'dev/js/src/*.js',
        'dev/js/main.js'

    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

var csso = require('gulp-csso');
gulp.task('styles', function () {
    return gulp.src([
        'dev/css/**/*.css'])
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['sass']);

gulp.task('default', ['sass', 'styles', 'scripts', 'fileinclude'], function () {
    gulp.watch('dev/scss/**/*.scss', ['sass']);
    gulp.watch('dev/css/**/*.css', ['styles']);
    gulp.watch('dev/**/*.html', ['fileinclude']);
    gulp.watch('dev/js/**/*.js', ['scripts']);
});
