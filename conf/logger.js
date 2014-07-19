/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var winston = require('winston');
var conf = require('./index');

var options = { json: false, timestamp: true };
var debug = { filename: conf.logging.debug, json: false };
var exceptions = { filename: conf.logging.exceptions, json: false };

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(options),
    new winston.transports.File(debug)
  ],
  exceptionHandlers: [
    new (winston.transports.Console)(options),
    new winston.transports.File(exceptions)
  ],
  exitOnError: false
});

exports = module.exports = logger;
