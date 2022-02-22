function capitalize(string) {
  const capitalizedString = string
    .split(' ')
    .map((s) => {
      const capitalized = s[0].toUpperCase() + s.slice(1);
      return capitalized;
    })
    .join(' ');
  return capitalizedString;
}

module.exports = capitalize;
