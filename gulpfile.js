// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/scripts.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/js'))
        .pipe(uglify('scripts.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('plugins', function() {
    return gulp.src('src/js/plugins.js')
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('src/js'))
        .pipe(uglify('plugins.js'))
        .pipe(gulp.dest('js/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'plugins', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'plugins', 'scripts', 'watch']);