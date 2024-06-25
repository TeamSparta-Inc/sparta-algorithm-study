/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    const chars = s.split('')
    let currentChar = ''
    let currentNum = 0

    for(let s of chars){
        if(!isNaN(s)){
            currentNum = currentNum * 10 + parseInt(s);
        } else if (s === '[') {
            stack.push(currentChar);
            stack.push(currentNum);
            currentChar = '';
            currentNum = 0;
        } else if (s === ']') {
            let num = stack.pop();
            let prevStr = stack.pop();
            currentChar = prevStr + currentChar.repeat(num);
        } else {
            currentChar += s;
        }
    }
    
    return currentChar
};
