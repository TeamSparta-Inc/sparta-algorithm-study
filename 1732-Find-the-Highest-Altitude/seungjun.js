var largestAltitude = function(gain) {
  let current = 0;
  let highest = 0;

  gain.forEach((g) => {
      current += g

      if (current > highest) highest = current;
  })

  return highest;
};
