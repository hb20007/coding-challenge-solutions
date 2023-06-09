import { parsePwdEntry } from './partOne.ts';

const isPwdValid = (pwdEntry: string): boolean => {
  const parsedPwd = parsePwdEntry(pwdEntry);

  if (parsedPwd) {
    const [, index1, index2, targetChar, pwd] = parsedPwd;

    return (
      (pwd[parseInt(index1) - 1] === targetChar) !==
      (pwd[parseInt(index2) - 1] === targetChar)
    );
  }

  return false;
};

const countValidPwds = (pwdList: Array<string>): number =>
  pwdList.filter(isPwdValid).length;

export { isPwdValid, countValidPwds };
