/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 0
    let end = n
    let mid
    let a = 1
    
    while(a !== 0){
        mid = parseInt((start+end)/2)
        a = guess(mid)
        
        if(a === -1){
            end = mid
        }else if(a===1){
            start = mid + 1
        }
        
    }
    return mid
};
