const partOne = (rows) =>
  rows.reduce(
    (checksum, row) => checksum + Math.max(...row) - Math.min(...row),
    0
  );

module.exports = partOne;
