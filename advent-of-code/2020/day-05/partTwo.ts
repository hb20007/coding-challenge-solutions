import { calculateSeatID } from './utils.ts';

const findMissingSeatID = (seatCodes: Array<string>): number => {
  const seatIDs = seatCodes.map((seatCode) => calculateSeatID(seatCode));
  const seatIDsSet = new Set(seatIDs);

  const missingSeatID = seatIDs.find(
    (seatID) => seatIDsSet.has(seatID + 2) && !seatIDsSet.has(seatID + 1),
  );
  return missingSeatID ? missingSeatID + 1 : -1;
};

export { findMissingSeatID };
