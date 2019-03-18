const partOne = passphrases =>
  passphrases.reduce(
    (acc, cur) => (acc + (new Set(cur).size === cur.length)) | 0,
    0
  );

module.exports = partOne;
