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
    cleaner.clear(settings.days, callback);
  };

  var fn = function(err) {
    if (err) {
      logger.warn(err);
    }
    done(err);
  };

  async.forever(proc, fn);
};

var anthcleaner = {

  initConfig: function(config) {
    return settings.initConfig(config);
  },

  run: function(done) {

    var dummy = function() {};

    var fn = function(err) {
      if (err) {
        logger.warn('connect error: ', err);
        return done(err);
      }
      clean(done || dummy);
    };

    datasource.connect(fn);
  }
};

exports = module.exports = anthcleaner;
