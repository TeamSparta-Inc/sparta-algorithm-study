function largestAltitude(gain: number[]): number {
  let max = 0;
  let result = 0;
  for (let i = 0; i < gain.length; i += 1) {
      result += gain[i];
      max = Math.max(max, result);
  }

  return max;
};