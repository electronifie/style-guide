module.exports = {
  name: 'no-trailing-spaces',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/\s+$/, ''); });
  }
};
