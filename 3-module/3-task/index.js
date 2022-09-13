function camelize(str) {
  return str.split('-').
  map((word, index) => index ? word[0].toUpperCase() + word.slice(1) : word).
  join('');
}
