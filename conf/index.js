/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Load environment configuration
 */
var configuration = require('./env/' + process.env.NODE_ENV + '.js') || {};

exports = module.exports = configuration;
