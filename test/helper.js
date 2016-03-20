'use strict';

// Globals for all test_*.js files.
global.path = require('path');
global.should = require('chai').should();
global.sassyTest = require('sassy-test');

// This beforeEach() is run before each test in all test_*.js files.
beforeEach(function(done) {
  sassyTest.configurePaths({
    includePaths: [
      // Path to Sass library.
      path.join(__dirname, '../sass')
      // Path to normalize-scss' dependencies.
      // @TODO Follow-up #43. Figure out "best" way for node-sass to figure out
      // normalize-scss' dependencies' includePaths.
      // path.dirname(require.resolve('support-for'))
    ]
  });
  done();
});
