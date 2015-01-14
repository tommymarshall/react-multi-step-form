var gulp   = require('gulp');

gulp.task('production', ['markup', 'minifyCss', 'uglifyJs']);
