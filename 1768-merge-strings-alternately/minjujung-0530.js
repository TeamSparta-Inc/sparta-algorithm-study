/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const word1Length = word1.length
    const word2Length = word2.length
    const totalArrayLength = word1Length + word2Length
    const isSameLength = word1Length === word2Length

    const info = word1Length < word2Length ? { shorter: word1, longer: word2,  minLength:word1Length } : { shorter: word2, longer: word1, minLength:word2Length }

    const checkLength = isSameLength ? totalArrayLength + 1 : info.minLength * 2 - 1

    const strArr = new Array(checkLength)

    const leftOver = info.longer.substr(info.minLength, info.longer.length);

    console.log("totalArrayLength", totalArrayLength)
    console.log('info', info)
    console.log('info.minLength + 1:', info.minLength + 1 )
    console.log('leftOver', leftOver)

   let i = 0;
   let j = 0;
   let k = 0;

    while (i <= checkLength) { // 0, 1, 2가 출력됩니다.
      if(i % 2 === 0) {
        strArr[i] = word1[j]
        j++
      } else {
        strArr[i] = word2[k]
        k++
      }
    i++;
    }

    console.log('strArr', strArr)
    console.log("strArr.join('')", strArr.join(''))

    return strArr.join('') + leftOver
};