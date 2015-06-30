module.exports = {
  name: 'space-after-function',
  appliesTo: '*.(js|coffee)',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/function\(/, 'function ('); });
  }
};
