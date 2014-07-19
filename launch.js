/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var cleaner = require('./lib/anthcleaner');

cleaner.initConfig(require('./conf'));

cleaner.run();
