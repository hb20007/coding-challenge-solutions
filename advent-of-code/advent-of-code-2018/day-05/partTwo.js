const partTwo = input => {
  const reducePolymer = polymer => {
    return [...polymer].reduce((reduced, char) => {
      const charCode = char.charCodeAt(0);
      const lastcharCode = reduced.charCodeAt(reduced.length - 1);
      if (Math.abs(charCode - lastcharCode) === 32) {
        return reduced.slice(0, -1);
      }
      return reduced + char;
    });
  };

  // Array.from({ length: 26 }, (_, index) => index); // Returns an array as follows: [0, 1, 2, ..., 25].

  const removedLengths = Array.from({ length: 26 }, (_, index) => {
    // Build a regex to remove all the occurrencies of a given letter, regardless of its case:
    const re = new RegExp(String.fromCharCode(65 + index), 'ig'); // 'i' flag: ignore case, 'g' flag: global match
    const reduced = reducePolymer(input.replace(re, ''));
    return reduced.length;
  });

  return Math.min(...removedLengths);
};

module.exports = partTwo;
