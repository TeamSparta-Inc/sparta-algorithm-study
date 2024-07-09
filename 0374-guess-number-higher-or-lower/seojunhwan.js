function guessNumber(n) {
  let min = 1;
  let max = n;

  while (min <= max) {
      const mid = Math.trunc((min + max) / 2)
      const guessResult = guess(mid);

      if (guessResult === -1) {
          max = mid -1;
      }
      if (guessResult === 1) {
          min = mid + 1;
      }
      if (guessResult === 0) {
          return mid;
      }
  }
};