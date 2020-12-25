const { readFileSync } = require('fs');
const log = require('node-pretty-log');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8');

log('success', 'PART 1 |', partOne(INPUT));

const LIMIT = 10000;

log('success', 'PART 2 |', partTwo(INPUT, LIMIT));
