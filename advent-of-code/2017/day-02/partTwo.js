/* eslint array-callback-return: "off", consistent-return: "off" */
const partTwo = (rows) => rows.reduce((checksum, row) => {
  for (const number of row) {
    const candidates = row.filter((x) => x < number);

    for (const candidate of candidates) {
      if (number % candidate === 0) {
        return checksum + number / candidate;
      }
    }
  }
}, 0);

module.exports = partTwo;
