/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // 더 긴거 * 2 해서 빈 리스트 만들기
    // word 1 은 index * 2, word 2 는 index * 2 + 1
    // 마지막에 공백 한번에 없애기
    let list = Array(Math.max(word1.length, word2.length) * 2)
    word1.split('').map((w1, i1) => {
        list[i1*2] = w1
    })
    word2.split('').map((w2, i2) => {
        list[i2*2+1] = w2
    })
    return list.join('').replace(null, '')
};