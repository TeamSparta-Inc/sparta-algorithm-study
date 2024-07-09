/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = []
    for(let i = 0; i <= n; i++){
        const bi = i.toString(2)
        const t = bi.split('').reduce((a,b) => +a+(+b), 0)
        arr.push(t)
    }
    return arr
};
