'use strict';
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');

module.exports = function (gulp, config, tasks) {

  config.js.dest = config.js.dest || config.js.destDir;

  gulp.task('js', 'Transpile JS using Babel, concat and uglify.', function (done) {
    gulp.src(config.js.src)
    .pipe(sourcemaps.init())
    .pipe(gulpif(config.js.babel, babel())) // all babel options handled in `.babelrc`
    .pipe(concat(config.js.destName))
    .pipe(gulpif(config.js.uglify, uglify()))
    .pipe(gulp.dest(config.js.dest))
    .on('end', function () {
      if (config.browserSync.enabled) {
        require('browser-sync').get('server').reload();
      }
      done();
    });
  });

  tasks.compile.push('js');

};
