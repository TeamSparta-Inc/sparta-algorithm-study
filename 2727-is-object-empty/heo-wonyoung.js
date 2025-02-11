/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const t = Object.keys(obj)
    return !(t.length > 0)
};