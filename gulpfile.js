var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  webserver = require('gulp-webserver'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename');

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

//Default
gulp.task('default', ['less', 'scripts', 'webserver', 'watch']);