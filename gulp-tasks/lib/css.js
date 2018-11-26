'use strict';
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');
var gulpif = require('gulp-if');
//var debug = require('gulp-debug');

module.exports = function (gulp, config, tasks) {

  function cssCompile(done, errorShouldExit) {
    gulp.src(config.css.src)
    .pipe(sassGlob())
    .pipe(plumber({
      errorHandler: function (error) {
        notify.onError({
          title: 'CSS <%= error.name %> - Line <%= error.line %>',
          message: '<%= error.message %>'
        })(error);
        if (errorShouldExit) process.exit(1);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init({
      debug: config.debug
    }))
    .pipe(sass({
      outputStyle: config.css.outputStyle,
      sourceComments: config.css.sourceComments,
      includePaths: config.css.includePaths
    }).on('error', sass.logError))
    .pipe(postcss(
      [
        autoprefixer({
          browsers: config.css.autoPrefixerBrowsers
        })
      ]
    ))
    .pipe(gulpif(config.css.flattenDestOutput, flatten()))
    .pipe(gulp.dest(config.css.dest))
    .on('end', function () {
      done();
    });
  }
  
  gulp.task('css', 'Compile Scss to CSS using Libsass with Autoprefixer and SourceMaps', cssCompile);

  var cssDeps = [];
  if (config.icons.enabled) {
    cssDeps.push('icons');
  }

  gulp.task('css:full', false, cssDeps, function(done) {
    cssCompile(done, true);
  });
  tasks.compile.push('css:full');

  tasks.clean.push('clean:css');

};
