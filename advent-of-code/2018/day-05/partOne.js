const partOne = (input) => {
  const finalReduced = [...input].reduce((reduced, char) => {
    const charCode = char.charCodeAt(0);
    const lastCharCode = reduced.charCodeAt(reduced.length - 1);
    if (Math.abs(charCode - lastCharCode) === 32) {
      return reduced.slice(0, -1);
    }
    return reduced + char;
  });

  return finalReduced.length;
};

module.exports = partOne;
