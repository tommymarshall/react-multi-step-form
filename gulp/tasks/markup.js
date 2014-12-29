var gulp         = require('gulp');
var swig         = require('gulp-swig');
var config       = require('../config').markup
var handleErrors = require('../util/handleErrors');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(swig(config.swig_options))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
