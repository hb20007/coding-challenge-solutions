const partTwo = captcha => {
  const offset = captcha.length / 2;

  return captcha.reduce(
    (acc, n, i, arr) => acc + (n === arr[(i + offset) % arr.length] ? n : 0),
    0
  );
};

module.exports = partTwo;
