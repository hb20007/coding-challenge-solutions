const partTwo = rows => {
  return rows.reduce((checksum, row) => {
    for (let i = 0; i < row.length; i++) {
      const candidates = row.filter(x => x < row[i]);

      for (let j = 0; j < candidates.length; j++) {
        if (row[i] % candidates[j] === 0) {
          return checksum + row[i] / candidates[j];
        }
      }
    }
  }, 0);
};

module.exports = partTwo;
