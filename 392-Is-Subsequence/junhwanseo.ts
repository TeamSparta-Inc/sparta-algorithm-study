function isSubsequence(s: string, t: string): boolean {
  let left = 0;
  for (let i = 0; i < t.length; i += 1) {
      if (t[i] === s[left]) {
          left += 1;
      }
  }
   
  return left === s.length;
};