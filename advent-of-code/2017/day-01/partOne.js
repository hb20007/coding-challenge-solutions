const partOne = captcha => {
  const circularCaptcha = captcha.slice(); // Shallow copy because partTwo will also use the captcha Array
  circularCaptcha.push(circularCaptcha[0]);

  return circularCaptcha.reduce(
    (acc, n, i, arr) => acc + (n === arr[i + 1] ? n : 0),
    0
  );
};

module.exports = partOne;
