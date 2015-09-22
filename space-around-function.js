module.exports = {
  name: 'space-around-function',
  appliesTo: '**/*.js',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/function\(/, 'function (').replace(/function\s*\(\s*([^\)\(]*\S)\s*\)\s*\{/, 'function ($1) {'); });
  }
};
