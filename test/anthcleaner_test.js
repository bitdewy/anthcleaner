/*
 * anthcleaner
 * https://github.com/bitdewy/anthcleaner
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var anthcleaner = require('../lib/anthcleaner');

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
    // setup here
    done();
  },
  initConfig: function(test) {
    anthcleaner.initConfig(require('../conf'));
    test.done();
  },

  run: function(test) {
    test.expect(1);

    var fn = function(err) {
      test.ifError(err);
      test.done();
    };

    anthcleaner.run(fn);
  }
};

exports = module.exports = tests;
