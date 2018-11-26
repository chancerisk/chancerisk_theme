'use strict';
var gulp = require('gulp-help')(require('gulp'));
var yaml = require('js-yaml');
var fs = require('fs');
var config = yaml.safeLoad(fs.readFileSync('./gulpconfig.yml', 'utf8'));
var schaer_brand = process.env.SCHAER_BRAND || 'kanso';
console.log();
console.log ('SCHAER BRAND: ' + schaer_brand);
console.log ();
config.css.src.push('scss/style_' + schaer_brand + '.scss');

var tasks = {
  'compile': [],
  'watch': [],
  'validate': [],
  'clean': [],
  'default': []
};
require('p2-theme-core')(gulp, config, tasks);
require('./gulp-tasks')(gulp, config, tasks);
console.log(tasks.compile);
gulp.task('compile', tasks.compile);
gulp.task('clean', tasks.clean);
gulp.task('validate', tasks.validate);
gulp.task('watch', tasks.watch);
tasks.default.push('watch');
gulp.task('default', tasks.default);
