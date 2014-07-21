/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var configuration = {
  mongodb: 'mongodb://admin:123@10.127.129.88:27017/anthcraft',
  relpath: {
    root: path.join(__dirname, '../../build'),
    theme: 'themes',
    preview: 'preview',
    thumbnails: 'thumbnail'
  },
  logging: {
    debug: path.join(__dirname, '../../logs/debug.log'),
    exceptions: path.join(__dirname, '../../logs/exceptions.log')
  },
  days: 7
};

exports = module.exports = configuration;
