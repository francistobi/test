const pseudoRandom = require("pseudo-random.js");
let randomFraction = (seed) => {
  const random = new pseudoRandom(seed);
  return random.next(1, 1000);
};
console.log(randomFraction(1001010));
