/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];

    function dfs(index, currentSum, combination) {
        if (combination.length === k && currentSum === n) {
            result.push([...combination]);
            return;
        }

        if (combination.length > k || currentSum > n) {
            return;
        }

        for (let i = index; i < numbers.length; i++) {
            combination.push(numbers[i]);
            dfs(i + 1, currentSum + numbers[i], combination);
            combination.pop();
        }
    }

    dfs(0, 0, []);

    return result;  
};