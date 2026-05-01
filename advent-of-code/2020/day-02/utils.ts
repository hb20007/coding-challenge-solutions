const parsePwdEntry = (pwdEntry: string): RegExpMatchArray | null => {
  const ENTRY_PATTERN = /(\d+)-(\d+) (\w+): (\S+)/;
  return new RegExp(ENTRY_PATTERN).exec(pwdEntry);
};

export { parsePwdEntry };
