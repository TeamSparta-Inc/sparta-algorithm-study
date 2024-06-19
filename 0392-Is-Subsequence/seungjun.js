/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex += 1;
      tIndex += 1;
    } else {
      tIndex += 1;
    }

    if (sIndex >= s.length) return true;
  }

  return false;
};
