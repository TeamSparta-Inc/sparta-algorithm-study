/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const temp = [...s]
    const mo = ['a','e','i','o','u', "A", "E", "I", "O", "U"]
    const arr = []
    for(let i= 0; i< s.length; i++){
        if(mo.includes(temp[i])){
            arr.push(temp[i])
            temp[i] = '*'
        }
    }
    arr.reverse()
    let index = 0
    for(let i = 0; i<temp.length; i++){
        if(temp[i] === "*"){
            temp[i] = arr[index++]
        }
    }
    return temp.join('')
};