import { REQUIRED_FIELDS } from './consts.ts';

const isPassportValid = (passport: Array<string>): boolean => {
  const passportKeysSet = new Set(
    passport.map((keyValuePair) => keyValuePair.split(':')[0]),
  );
  return REQUIRED_FIELDS.every((requiredField) =>
    passportKeysSet.has(requiredField)
  );
};

const countValidPassports = (passports: Array<Array<string>>): number =>
  passports.filter(isPassportValid).length;

export { countValidPassports, isPassportValid };
