/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    length = word1.length > word2.length ? word1.length : word2.length

    let str = ""
    for(let i = 0; i < length; i++){
        if(word1[i]) str += word1[i]
        else str += word1.slice(i, word1.length)

        if(word2[i]) str += word2[i]
        else str += word1.slice(i, word2.length)
    }
    
    return str
};