var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('default', function(cb) {
  runSequence(
    'build:dev',
    'sprite:svg',
    'watch',
    'server',
    cb
  );
});
