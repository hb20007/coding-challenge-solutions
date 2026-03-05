const partOne = (input) => {
  const finalReduced = [...input].reduce((reduced, char) => {
    const charCode = char.codePointAt(0);
    const lastCharCode = reduced.codePointAt(reduced.length - 1);
    if (Math.abs(charCode - lastCharCode) === 32) { // 32 = 'a'.codePointAt(0) - 'A'.codePointAt(0)
      return reduced.slice(0, -1);
    }
    return reduced + char;
  });

  return finalReduced.length;
};

module.exports = partOne;
