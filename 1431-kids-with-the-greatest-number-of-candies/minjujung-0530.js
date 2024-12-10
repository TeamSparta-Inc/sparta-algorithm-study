/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // 일단 array 에서 제일 큰 수 찾기
    // array 를 돌면서 extra를 더한게 그것보다 큰지 확인
    // 크거나 같으면 true 작으면 false
    const max = Math.max(...candies)
    
    return candies.map((number) => 
        {if ((number + extraCandies) >= max) return true
        return false}
    )
};