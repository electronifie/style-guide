module.exports = {
  name: 'no-do-not-commit',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/do\s*not\s*commit/i, ''); });
  }
};
