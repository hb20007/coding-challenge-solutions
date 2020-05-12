const INPUT = '1321131112';

const FIND_REPETITIONS_REGEX = /(\d)\1*/g; // \1 = capturing group 1

const PART_1_REPS = 40;
const PART_2_REPS = 50; // eslint-disable-line no-unused-vars

const lookAndSay = (input) =>
  input
    .match(FIND_REPETITIONS_REGEX)
    .reduce((acc, char) => `${acc}${char.length}${char[0]}`, '');

let result = INPUT;
for (let i = 0; i < PART_1_REPS; i++) {
  result = lookAndSay(result);
}

console.log(result.length);
