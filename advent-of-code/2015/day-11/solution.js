const INPUT = 'hxbxwxba';

// Rules for correct password:
const hasStraightIncreasingSymbols = (string) =>
  string
    .split('')
    .map((char) => char.charCodeAt(0))
    .some(
      (_, index, arr) =>
        arr[index] === arr[index + 1] - 1 &&
        arr[index + 1] === arr[index + 2] - 1
    );
const hasRestrictedSymbols = (string) => /[iol]/.test(string);
const hasPairs = (string) => /(\w)\1.*(\w)\2/.test(string);

const incrementChar = (char) =>
  char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);

const incrementString = (string) => {
  const nextChar = incrementChar(string.slice(-1));
  return nextChar === 'a'
    ? `${incrementString(string.slice(0, -1))}a`
    : `${string.slice(0, -1)}${nextChar}`;
};

const isValidPassword = (string) =>
  hasStraightIncreasingSymbols(string) &&
  !hasRestrictedSymbols(string) &&
  hasPairs(string);

let result = INPUT;
while (!isValidPassword(result)) result = incrementString(result);

console.log(result);
