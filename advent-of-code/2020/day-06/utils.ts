const charToBin = (character: string): number =>
  1 << (character.charCodeAt(0) - 97);

const wordToBin = (word: string): number =>
  [...word].map(charToBin).reduce((result, curr) => result | curr);

const _countSetBitsSlow = (num: number): number =>
  num ? _countSetBitsSlow(num >> 1) + (num & 1) : 0;

// Brian Kernighan's Algorithm
const countSetBits = (num: number): number =>
  num ? countSetBits(num & (num - 1)) + 1 : 0;

export { wordToBin, countSetBits };
