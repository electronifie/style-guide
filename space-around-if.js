module.exports = {
  name: 'space-around-if',
  appliesTo: '**/*.js',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/if\s*\(/, 'if (').replace(/if\s*\(\s*([^\)\()]*\S)\s*\)\s*\{/, 'if ($1) {'); });
  }
};
