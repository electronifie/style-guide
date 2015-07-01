module.exports = {
  name: 'no-debugger',
  appliesTo: '**/*.+(js|coffee)',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/\s*debugger;?\s*/, ''); });
  }
};
