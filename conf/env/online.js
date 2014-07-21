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
  mongodb: 'mongodb://10.60.145.18:27017/anthcraft',
  relpath: {
    root: '/home/webadmin/anthCraft-dist/public/resources',
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
