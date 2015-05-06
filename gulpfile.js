/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, vis, window */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    webserver = require('gulp-webserver'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma');

//Build Scripts
gulp.task('scripts', function () {
    gulp.src(['src/vis.namespace.js', 'src/vis.config.js', 'src/core/*.js', 'src/data/*.js', 'src/chart/*.js'])
        .pipe(plumber())
        .pipe(concat('visCharts.js'))
        .pipe(gulp.dest('dist'));

    gulp.src(['src/vis.namespace.js', 'src/vis.config.js', 'src/utility/*.js', 'src/core/*.js', 'src/data/*.js', 'src/chart/*.js'])
        .pipe(plumber())
        .pipe(concat('visCharts.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//Build Styles
gulp.task('less', function () {
    gulp.src('src/less/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rename('visCharts.css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS())
        .pipe(rename('visCharts.min.css'))
        .pipe(gulp.dest('dist'));
});

//Watch
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/less/**/*.less', ['less']);
});

//Web Server
gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

var testFiles = [
    'tests/*.js'
];

//Unit Test
gulp.task('test', function () {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});

//Auto Test
gulp.task('autotest', function () {
    return gulp.watch(['test/*.js'], ['test']);
});

//Default
gulp.task('default', ['less', 'scripts', 'webserver', 'watch']);