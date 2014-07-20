/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var settings = require('../lib/settings');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var tests = {

  setUp: function(done) {
    done();
  },

  initConfig: function(test) {
    test.expect(2);

    var config = {
      mongo: 'mongo',
      initConfig: 'initConfig'
    };

    var env = settings.initConfig(config);
    test.equal(env.mongo, config.mongo, '');

    config = {
      mongo: 'whatever'
    };

    test.notEqual(env.mongo, config.mongo, '');
    test.done();
  }

};

exports = module.exports = tests;
