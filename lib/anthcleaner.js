/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var cleaner = require('./cleaner');
var datasource = require('./datasource');
var logger = require('../conf/logger');
var settings = require('./settings');

var clean = function() {

  var proc = function(callback) {

    var fn = function(err) {
      if (err) {
        return callback(err);
      }
      cleaner.clear(30, fn);
    };
  };

  var done = function(err) {
    if (err) {
      return logger.warn(err);
    }
    logger.info('execute finished...');
  };

  async.forever(proc, done);
};

var cleaner = {

  initConfig: function(config) {
    return settings.initConfig(config);
  },

  run: function() {

    var fn = function(err) {
      if (err) {
        return logger.warn('connect error: ', err);
      }
      clean();
    };

    datasource.connect(fn);
  }
};

exports = module.exports = cleaner;
