/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var MongoClient = require('mongodb').MongoClient;
var settings = require('./settings');

var db = null;

var dataSource = {

  connect: function(done) {
    var fn = function(err, result) {
      if (err) {
        return done(err);
      }
      db = result;
      done(err, db);
    };
    MongoClient.connect(settings.mongodb, fn);
  },

  next: function(days, done) {
    var millisecond = 24 * 60 * 60 * 1000 * (days || 30);
    var cond = { updateTime: { "$lt" : new Date().now() - millisecond }};

    var fn = function(err, doc) {
      if (err) {
        return done(err);
      }

      done(err, doc);
    };

    db.collection('themes').findOne(cond, fn);
  },

  delete: function(id, done) {
    db.collection('themes').remove({ id: id }, done);
  }
};

exports = module.exports = dataSource;
