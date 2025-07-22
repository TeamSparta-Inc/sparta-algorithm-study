/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return (s.trim().split(' ').filter(Boolean).pop().length)
};