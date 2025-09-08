const partTwo = (passphrases) => {
  passphrases = passphrases.map((phrase) =>
    phrase.map((word) => word.split('').sort().join())
  );

  return passphrases.reduce(
    (acc, cur) => (acc + (new Set(cur).size === cur.length)) | 0,
    0
  );
};

module.exports = partTwo;
