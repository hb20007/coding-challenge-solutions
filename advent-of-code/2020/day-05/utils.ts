const calculateSeatID = (seatCode: string): number =>
  Number.parseInt(
    seatCode.replaceAll(
      /./g,
      (char) => ({ F: '0', B: '1', L: '0', R: '1' }[char] || ''),
    ),
    2,
  );

export { calculateSeatID };
