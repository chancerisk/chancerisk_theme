'use strict';

var svgSprite = require("gulp-svg-sprite");
module.exports = function (gulp, config, tasks) {
  function syncSvg (done) {
          // Basic configuration example
          var font_config = {
              mode: {
                  icons: {
                      example: false,
                      mode: 'defs',
                      prefix: '.icon--',
                      dest: '.',
                      render: {
                          scss : {
                              dest : '_icons.scss'
                          }
                      }
                  }
              }
          };
          gulp.src(config.icons.src)
              .pipe(svgSprite(font_config))
              .pipe(gulp.dest('dest/icons'))
              .on('end', function () {
                  done();
              });
  };
  gulp.task('icons', 'sync pattern-lab source images with drupal', syncSvg);
};
