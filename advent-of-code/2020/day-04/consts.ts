const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const Limits = {
  Byr: {
    MIN: 1920,
    MAX: 2002,
  },
  Iyr: {
    MIN: 2010,
    MAX: 2020,
  },
  Eyr: {
    MIN: 2020,
    MAX: 2030,
  },
  Hgt: {
    Cm: {
      MIN: 150,
      MAX: 193,
    },
    In: {
      MIN: 59,
      MAX: 76,
    },
  },
};

const Regex = {
  VALID_HGT: /^(?:(?:(?:1[5-8]\d|19[0-3])cm)|(?:(?:59|6\d|7[0-6])in))$/,
  VALID_HCL: /^#[0-9a-f]{6}$/,
  VALID_ECL: /^(?:amb|blu|brn|gry|grn|hzl|oth)$/,
  VALID_PID: /^\d{9}$/,
};

export { REQUIRED_FIELDS, Limits, Regex };
