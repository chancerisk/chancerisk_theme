'use strict';
var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('lodash');

// Custom Gulp Tasks
module.exports = function (gulp, config, tasks) {
  var defaultConfig = yaml.safeLoad(fs.readFileSync(__dirname + '/config.default.yml', 'utf8'));
  config = _.merge(defaultConfig, config);

  if (fs.existsSync(__dirname + '/local.config.default.yml')) {
    var localConfig = yaml.safeLoad(fs.readFileSync(__dirname + '/local.config.default.yml', 'utf8'));
    config = _.merge(config, localConfig);
  }

  if (config.images.enabled) {
    require('./lib/images.js')(gulp, config, tasks);
  }
  // Overwrite default icons behavior
  require('./lib/svgsprites.js')(gulp, config, tasks);

  if (!config.sourceMapEmbed) {
    // Overwrite default css & js generator to remove sourceMapEmbed
    require('./lib/css.js')(gulp, config, tasks);
    require('./lib/js.js')(gulp, config, tasks);
  }
};
