const partOne = rows => {
  return rows.reduce(
    (checksum, row) => checksum + Math.max(...row) - Math.min(...row),
    0
  );
};

module.exports = partOne;
