/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(' ').reverse().filter(el=>el).join(" ")
    return arr
};