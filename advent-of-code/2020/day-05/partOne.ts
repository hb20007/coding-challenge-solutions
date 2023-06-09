const calculateSeatID = (seatCode: string): number =>
  parseInt(
    seatCode.replace(
      /./g,
      (char) => ({ F: '0', B: '1', L: '0', R: '1' }[char] || ''),
    ),
    2,
  );

const findHighestSeatID = (seatCodes: Array<string>): number =>
  Math.max(...seatCodes.map((seatCode) => calculateSeatID(seatCode)));

export { calculateSeatID, findHighestSeatID };
