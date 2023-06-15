const { readFileSync } = require('fs');
const Logger = require('@ptkdev/logger');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8');
const logger = new Logger();

logger.info(partOne(INPUT), 'PART 1');

const LIMIT = 10000;

logger.info(partTwo(INPUT, LIMIT), 'PART 2');
