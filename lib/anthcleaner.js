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

var clean = function(done) {

  var proc = function(callback) {

    var fn = function(err) {
      if (err) {
        return callback(err);
      }
      cleaner.clear(30, fn);
    };
  };

  var fn = function(err) {
    if (err) {
      logger.warn(err);
    } else {
      logger.info('execute finished...');
    }
    done(err);
  };

  async.forever(proc, fn);
};

var cleaner = {

  initConfig: function(config) {
    return settings.initConfig(config);
  },

  run: function(done) {

    var dummy = function() {};

    var fn = function(err) {
      if (err) {
        return logger.warn('connect error: ', err);
      }
      clean(done || dummy);
    };

    datasource.connect(fn);
  }
};

exports = module.exports = cleaner;
