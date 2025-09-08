const crypto = require('crypto');

const INPUT = 'iwrupvqb';

const ZEROS_NEEDED = 5;

const md5 = (data) => crypto.createHash('md5').update(data).digest('hex'); // A message digest is a cryptographic hash function containing a string of digits created by a one-way hashing formula.

const isStartingWithFiveZeros = (data) =>
  data.slice(0, ZEROS_NEEDED) === '0'.repeat(ZEROS_NEEDED);

let n = 0;
while (!isStartingWithFiveZeros(md5(`${INPUT}${n}`))) n++;

console.log(n);
