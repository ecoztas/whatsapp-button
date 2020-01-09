/**
 * ÖZTAŞ, Emre Can <me@emrecanoztas.com><15:02><09.01.2020>
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// TASK: Default
gulp.task('default', function () {
  console.log('Works fine!');
});

// TASK: SASS
gulp.task('sass', function () {
  return (
        gulp.src('src/whatsapp-button.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'))
  );
});
