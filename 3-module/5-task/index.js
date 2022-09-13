function getMinMax(str) {
  const values = str.
  split(' ').
  map((value) => Number(value)).
  filter((value) => !isNaN(value)).
  sort((a,b) => a - b);
  return {min : values[0], max : values[values.length - 1]}
}

