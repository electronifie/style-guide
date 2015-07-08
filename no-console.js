module.exports = {
  name: 'no-console',
  appliesTo: '**/*.+(js|coffee)',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/console\.[^)]+\);?/, ''); });
  }
};
