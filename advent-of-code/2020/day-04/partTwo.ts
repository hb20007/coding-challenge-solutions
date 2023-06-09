import { Limits, Regex } from './consts.ts';
import { Passport } from './interfaces.ts';

const isInRange = (num: number, min: number, max: number): boolean =>
  min <= num && num <= max;

const isPassportValid = (passport: Array<string>): boolean => {
  const passportObj = passport
    .map((keyValuePair) => keyValuePair.split(':'))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
  const { byr, iyr, eyr, hgt, hcl, ecl, pid }: Passport = passportObj;

  const results = {
    isByrValid: byr && isInRange(parseInt(byr), Limits.Byr.MIN, Limits.Byr.MAX),
    isIyrValid: iyr && isInRange(parseInt(iyr), Limits.Iyr.MIN, Limits.Iyr.MAX),
    isEyrValid: eyr && isInRange(parseInt(eyr), Limits.Eyr.MIN, Limits.Eyr.MAX),
    isHgtValid: hgt && Regex.VALID_HGT.test(hgt),
    isHclValid: hcl && Regex.VALID_HCL.test(hcl),
    isEclValid: ecl && Regex.VALID_ECL.test(ecl),
    isPidValid: pid && Regex.VALID_PID.test(pid),
  };

  return Object.values(results).every((bool) => bool);
};

const countValidPassports = (passports: Array<Array<string>>): number =>
  passports.filter(isPassportValid).length;

export { isPassportValid, countValidPassports };
