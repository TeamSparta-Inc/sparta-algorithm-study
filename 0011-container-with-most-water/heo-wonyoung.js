/**
 * @param {number[]} height
 * @return {number}
 */

function maxValue(value1, value2){
    return value1 >= value2 ? value1 : value2
}

function calc(left, right, height){
    let minHeight = Math.min(height[left], height[right])
    return minHeight * (right-left)
}

var maxArea = function(height) {
    // 길이 -1 * 담을 수 있는 최대 높이
    // [1,8,6,2,5,4,8,3,7] 일때 높이(배열 index) 8(1) 7(8) 최대 높이(두 막대의 min 값): 7, 너비 7(인덱스 차이)1
    let left = 0
    let right = height.length - 1
    let maxResult = - 1
    while(left < right){
        maxResult = Math.max(maxResult, calc(left, right, height))
        
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
        if(left === right) break
    }
    return maxResult
};