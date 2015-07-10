module.exports = {
  name: 'parrot',
  decription: 'Lets the user know we\'re checking its commits. Doesn\'t make suggestions.',
  validate: function (lines, options) {
    console.log('☕ Checking %s line%s in %s.', lines.length, lines.length == 1 ? '' : 's', (options && options.fileName) || '??');
    return lines;
  }
};
