var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  concat = require("gulp-concat"),
  merge = require('merge-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  expect = require('gulp-expect-file'), 
  uglify = require('gulp-uglify'),
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
    .pipe(concat("modal-fx.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task("scripts", function() {
  var files = [
    "src/_js/**/*.js"
  ];

  return gulp
    .src(files)
    .pipe(expect(files))
    .on('error', handleError)
    .pipe(concat("modal-fx.js"))
    .pipe(gulp.dest("dist/js/"))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("dist/js/"))
    .pipe(browserSync.stream());
}); 

gulp.task('watch', ['styles'], function() {
  gulp.watch(['src/_scss/**/*.scss'], ['styles']);
  gulp.watch(['src/_js/**/*.js'], ['scripts']);
});

gulp.task(
  "live",["watch", "scripts", "styles"], 
  function() {
    browserSync.init({
      server: {
        baseDir: "./"
    }
  });
    
  gulp.watch("src/_scss/**/*.scss", ["watch"]);
  gulp.watch("src/_js/**/*.js", ["watch"]);
  gulp.watch("**/*.html").on("change", browserSync.reload);
});

gulp.task('clean', function() {
  return del("dist");
});

gulp.task("default", ["styles", "scripts"], function() {
});