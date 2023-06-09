const parsePwdEntry = (pwdEntry: string): RegExpMatchArray | null => {
  const ENTRY_PATTERN = /(\d+)-(\d+) (\w+): (\S+)/;
  return pwdEntry.match(ENTRY_PATTERN);
};

const isPwdValid = (pwdEntry: string): boolean => {
  const parsedPwd = parsePwdEntry(pwdEntry);

  if (parsedPwd) {
    const [, minCount, maxCount, targetChar, pwd] = parsedPwd;
    const charCount = [...pwd].filter((char) => char === targetChar).length;

    return parseInt(minCount) <= charCount && charCount <= parseInt(maxCount);
  }

  return false;
};

const countValidPwds = (pwdList: Array<string>): number =>
  pwdList.filter(isPwdValid).length;

export { parsePwdEntry, isPwdValid, countValidPwds };
