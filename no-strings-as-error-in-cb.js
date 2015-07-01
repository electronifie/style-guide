module.exports = {
  name: 'no-strings-as-error-in-cb',
  appliesTo: '**/*.js',
  validate: function (lines) {
    return lines.map(function (line) { return line.replace(/cb\('([^']*)'/, 'cb(new Error(\'$1\')'); });
  }
};
