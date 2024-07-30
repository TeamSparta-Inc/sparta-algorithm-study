/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t0 = 0
    let t1 = 1
    let t2 = 1
    let temp = [t0, t1, t2]

    let index = 0
    for(let i = 3; i<n ; i++){
        let tn = temp[0] + temp[1] + temp[2]
        temp[index++] = tn
        if(index === 3) index = 0
    }
    if(n < 3) return temp[n]
    return temp[0] + temp[1] +temp[2]
};
