var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  concat = require("gulp-concat"),
  merge = require('merge-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  del = require('del'),
  browserSync = require("browser-sync").create();

gulp.task('styles', function() {
  return gulp.src([
      'src/_scss/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: [
      'Chrome >= 35',
      'Firefox >= 38',
      'Edge >= 12',
      'Explorer >= 10',
      'iOS >= 8',
      'Safari >= 8',
      'Android 2.3',
      'Android >= 4',
      'Opera >= 12']})]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('watch', ['styles'], function() {
  gulp.watch(['src/_scss/**/*.scss'], ['styles']);
});

gulp.task(
  "live",["watch", "styles"], 
  function() {
    browserSync.init({
      server: {
        baseDir: "./"
    }
  });
    
  gulp.watch("src/_scss/**/*.scss", ["watch"]);
  gulp.watch("**/*.html").on("change", browserSync.reload);
});

gulp.task('clean', function() {
  return del("dist");
});

gulp.task("default", ["styles"], function() {
});