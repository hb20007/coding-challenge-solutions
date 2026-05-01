import { calculateSeatID } from './utils.ts';

const findHighestSeatID = (seatCodes: Array<string>): number =>
  Math.max(...seatCodes.map((seatCode) => calculateSeatID(seatCode)));

export { findHighestSeatID };
