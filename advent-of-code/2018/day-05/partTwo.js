const partTwo = (input) => {
  const reducePolymer = (polymer) =>
    [...polymer].reduce((reduced, char) => {
      const charCode = char.codePointAt(0);
      const lastCharCode = reduced.codePointAt(reduced.length - 1);
      if (Math.abs(charCode - lastCharCode) === 32) {
        return reduced.slice(0, -1);
      }
      return reduced + char;
    });

  // Array.from({ length: 26 }, (_, index) => index) returns the following: [0, 1, 2, ..., 25].
  const removedLengths = Array.from({ length: 26 }, (_, index) => {
    // Build a regex to remove all the occurrences of a given letter, regardless of its case:
    const re = new RegExp(String.fromCodePoint(65 + index), 'ig'); // 65 = 'A'.codePointAt(0)
    const reduced = reducePolymer(input.replace(re, ''));
    return reduced.length;
  });

  return Math.min(...removedLengths);
};

module.exports = partTwo;
