import { parsePwdEntry } from './utils.ts';

const isPwdValid = (pwdEntry: string): boolean => {
  const parsedPwd = parsePwdEntry(pwdEntry);

  if (parsedPwd) {
    const [, minCount, maxCount, targetChar, pwd] = parsedPwd;
    const charCount = [...pwd].filter((char) => char === targetChar).length;

    return Number.parseInt(minCount) <= charCount &&
      charCount <= Number.parseInt(maxCount);
  }

  return false;
};

const countValidPwds = (pwdList: Array<string>): number =>
  pwdList.filter(isPwdValid).length;

export { countValidPwds, isPwdValid };
