import { calculateSeatID } from './partOne.ts';

const findMissingSeatID = (seatCodes: Array<string>): number => {
  const seatIDs = seatCodes.map((seatCode) => calculateSeatID(seatCode));
  const seatIDsSet = new Set(seatIDs);

  return (
    seatIDs.filter(
      (seatID) => seatIDsSet.has(seatID + 2) && !seatIDsSet.has(seatID + 1),
    )[0] + 1
  );
};

export { findMissingSeatID };
