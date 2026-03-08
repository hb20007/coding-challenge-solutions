import Logger from '@ptkdev/logger';
import { readFileSync } from 'node:fs';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf8');
const logger = new Logger();

logger.info(partOne(INPUT), 'PART 1');
logger.info(partTwo, 'PART 2');
