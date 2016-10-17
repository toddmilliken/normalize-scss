'use strict';

describe('Fork versions', function() {
  describe('Default fork', function() {
    it('should render properly', function() {
      var sassyTest = new SassyTest({
        fixtures: path.join(__dirname, 'fixtures/fork-versions'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/default')
        ]
      });
      return sassyTest.renderFixture('default');
    });
  });

  describe('Ruby Sass with Compass fork', function() {
    it('should render properly', function() {
      var sassyTest = new SassyTest({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/ruby-sass-compass')
        ]
      });
      return sassyTest.renderFixture('fork-versions/ruby-sass-compass');
    });
  });

  describe('Typey fork', function() {
    it('should render properly', function() {
      var sassyTest = new SassyTest({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/typey'),
          // Path to normalize-scss' dependencies.
          path.dirname(require.resolve('typey'))
        ]
      });
      return sassyTest.renderFixture('fork-versions/typey');
    });
  });

  describe('Typey, Chroma and KSS fork', function() {
    it('should render properly', function() {
      var sassyTest = new SassyTest({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/typey-chroma-kss'),
          // Path to normalize-scss' dependencies.
          path.dirname(require.resolve('chroma-sass')),
          path.dirname(require.resolve('typey'))
        ]
      });
      return sassyTest.renderFixture('fork-versions/typey-chroma-kss');
    });
  });
});
