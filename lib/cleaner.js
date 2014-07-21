/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var fs = require('fs');
var commutation = require('./commutation');
var datasource = require('./datasource');
var logger = require('../conf/logger');

var flattenArray = function(done) {

  return function(err, results) {
    var fileList = Array.prototype.concat.apply([], results);
    done(err, fileList);
  };
};

var filesFromRecord = function(record, done) {

  var functions = function(object) {

    var isFunction = function(property) {
      return object[property] instanceof Function;
    };

    var toFunction = function(property) {
      return function(fn) {
        var result = object[property](record);
        fn(null, result);
      };
    };

    var properties = Object.getOwnPropertyNames(object);
    return properties.filter(isFunction).map(toFunction);
  };

  async.parallel(functions(commutation), flattenArray(done));
};

var removeFiles = function(files, done) {

  var fn = function(err) {
    if (err) {
      logger.warn(err);
    }
    done(err);
  };

  var remove = function(file, cb) {

    var fn = function(err, data) {
      if (err) {
        logger.warn('file: `' + file + '` does not exist.');
      } else {
        logger.info('file: `' + file + '` deleted.');
      }
      cb(null, data);
    };
    fs.unlink(file, fn);
  };

  async.each(files, remove, fn);
};

var removeFilesFromRecord = function(doc, done) {

  var fn = function(err, files) {
    if (err) {
      return done(err);
    }
    removeFiles(files, done);
  };

  filesFromRecord(doc, fn);
};

var cleaner = {
  clear: function(days, done) {

    var fn = function(err, doc) {

      if (err) {
        return done(err);
      }
      if (!doc) {
        return done('no result.');
      }

      var deleteRecord = function(err) {
        if (err) {
          return done(err);
        }
        datasource.delete(doc._id, done);
      };

      removeFilesFromRecord(doc, deleteRecord);
    };

    datasource.next(days, fn);
  }

};

exports = module.exports = cleaner;
