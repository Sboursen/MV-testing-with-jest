function stringLength(string) {
  const length = string.length;

  if (length > 10 || length < 1) {
    throw new TypeError('STRING LENGTH ERROR');
  }

  return string.length;
}

module.exports = stringLength;
