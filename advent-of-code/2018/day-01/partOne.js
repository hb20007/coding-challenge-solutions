const partOne = (input) =>
  input
    .split(/[\r\n]+/)
    .map(Number)
    .reduce((result, change) => result + change);

export default partOne;
