function singleNumber(nums: number[]): number {
    const duuplicateNums = new Map();
  for(const num of nums) {
    if(duuplicateNums.has(num)) {
      duuplicateNums.delete(num);
    } else {
      duuplicateNums.set(num, 1);
    }
  }
  return Array.from(duuplicateNums.keys())[0];

};