var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig').font;
var gulp          = require('gulp');

gulp.task('font', function() {
  browserSync.notify(config.notification);
  return gulp.src(config.assets)
    .pipe(gulp.dest(config.dist));
});
