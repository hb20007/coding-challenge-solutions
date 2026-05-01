import { parsePwdEntry } from './utils.ts';

const isPwdValid = (pwdEntry: string): boolean => {
  const parsedPwd = parsePwdEntry(pwdEntry);

  if (parsedPwd) {
    const [, index1, index2, targetChar, pwd] = parsedPwd;

    return (
      (pwd[Number.parseInt(index1) - 1] === targetChar) !==
        (pwd[Number.parseInt(index2) - 1] === targetChar)
    );
  }

  return false;
};

const countValidPwds = (pwdList: Array<string>): number =>
  pwdList.filter(isPwdValid).length;

export { countValidPwds, isPwdValid };
