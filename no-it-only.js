module.exports = {
  name: 'no-it-only',
  appliesTo: '**/*.+(js|coffee)',
  describe: 'Prevent mocha\'s single test selector, it.only(...) from being commited.',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/it\.only\(/, 'it('); });
  }
};
