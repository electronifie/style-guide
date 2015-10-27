module.exports = {
  name: 'no-current-tag',
  appliesTo: '**/*.feature',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/@current/, ''); });
  }
};
